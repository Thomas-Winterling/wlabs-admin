import React, { useState, useEffect } from "react"
import { Card, Alert } from "react-bootstrap"
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from './Header'
import Sidebar from './Sidebar'
import Termin from './sidebar/Termin'
import Todo from './Todo'
import Todos from './Todos'
import db from '../firebase';
import firebase from 'firebase'
import BeatLoader from "react-spinners/BeatLoader"
import { css } from "@emotion/core";
import Customers from './Customers'
import Chart from './statistics/Chart'

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }









  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // when the app loads we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() =>{
    // this code here.... fires when the app.js loads
    db.db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
       // console.log(snapshot.docs.map((doc) => doc.data().todo))
      setTodos(snapshot.docs.map((doc) => ({
        id: doc.id ,
        todo: doc.data().todo})))
    })
  }, [])


  const addTodo = (event) => {
    // This will fire off when we click the button
    event.preventDefault() // will stop the refresh
    
    // Post to database
    db.db.collection('todos').add({
      todo: input,  // + input
      timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
    })

    // todos.push()
    setTodos([...todos, input])
    setInput('') // clear uo the input after hitting submit
  }


  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('none');

  const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  border-color: red;
`;

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setContent('flex')
    }, 3000)
  },[])

  return (
    <>
      <div className="dashboard">
      <div className="top-container">
        <Header />
      </div>
      <div className="content-container">
      <div className="content-left">
        <Sidebar />
      </div>
        <div className="content-right">
          {
            loading ?

            <BeatLoader
              color="orange"
              loading={loading}
              css={override}
              size={30} 
            />

            :

            <div style={{display: content, flexDirection: "column" }}>
              <div className="headline">
                <h4>Dashboard</h4>
              </div>
              <div className="todos">
                <div className="todos-header">
                  <Button variant="contained" color="primary" type="submit" onClick={addTodo}>
                   <AddIcon />Neuer Eintrag
                  </Button>
                </div>
                <div className="todos-content">
                  <Customers />
                </div>
              </div>

              <div className="statistics">
                <div className="wl-statistic">
                  <h4>Kundenwachstum</h4>
                  <Chart />
                </div>
                <div className="wl-statistic">
                  <h4>Loginaktivität</h4>
                  <Chart />
                </div>
                <div className="wl-statistic">
                  <h4>Übersicht der letzten Woche</h4>
                  <Chart />
                </div>
              </div>
            </div>
          }
      </div>
    </div>
  </div>  
  </>
  )
}
