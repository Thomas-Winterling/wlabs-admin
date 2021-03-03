import React, { useState, useEffect } from "react"
import { Button, FormControl, Input, InputLabel, Modal } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Header from './Header'
import Sidebar from './Sidebar'
import Todo from './Todo'
import db from '../firebase';
import firebase from 'firebase'
import BeatLoader from "react-spinners/BeatLoader"
import { css } from "@emotion/core";
import Chart from './statistics/Chart'
import Customers from './customers/Customers'
import { makeStyles } from '@material-ui/core/styles'

// Style Modal
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 50
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export default function Dashboard() {
  
  // Authentication
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  // Modal
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [modalStyle] = useState(getModalStyle);

  // Todos
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // Customers
  const [customers, setCustomers] = useState([])
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [registration, setRegistration] = useState('')
  const [lastlogin, setLastlogin] = useState('')
  

  //Loading Spinner
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('none');

  // Style Spinner and set Spinner
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


  // Logout function
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }



  //Database Todos
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



  // Database Cusomers
  useEffect(() => {
    // this code here.... fires when the app.js loads
    db.db.collection('customers').orderBy('timestamp','desc').onSnapshot(snapshot => {
        //console.log(snapshot.docs.map((doc) => doc.data().email))
      setCustomers(snapshot.docs.map((doc) => ({
        id: doc.id,
        firstname: doc.data().firstname,
        lastname: doc.data().lastname,
        username: doc.data().username,
        email: doc.data().email,
        lastlogin: doc.data().lastlogin,
        registration: doc.data().registration,
        timestamp: doc.data().timestamp
      })))   
    })
  }, [])


  const addCustomers = (event) => {
    // This will fire off when we click the button
    event.preventDefault() // will stop the refresh
    
    // Post to database
    db.db.collection('customers').add({
      firstname: firstname,  // + input
      lastname: lastname,
      username: username,
      email: email,
      registration: Date(),
      lastlogin: lastlogin,
      timestamp:  firebase.firestore.FieldValue.serverTimestamp(),
    })

    // todos.push()
    setCustomers([...customers, firstname, lastname, username, email, registration, lastlogin])
    setFirstname('') // clear uo the input after hitting submit
    setLastname('')
    setUsername('')
    setEmail('')
    setRegistration('')
    setLoading('')
  }


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
                  <Button variant="contained" color="primary" type="submit" onClick={e => setOpen(true)}>
                   <AddIcon />Neuer Eintrag
                  </Button>
                </div>

                <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div style={modalStyle} className={classes.paper}>
              <h1>Kundenerstellung</h1>
              <hr/>
              <form>
                <FormControl>
                  <InputLabel>Vorname</InputLabel>
                  <Input value={firstname} onChange={event => setFirstname(event.target.value)} />
                </FormControl>
                <FormControl>
                  <InputLabel>Nachname</InputLabel>
                  <Input value={lastname} onChange={event => setLastname(event.target.value)} />
                </FormControl>
                <FormControl>
                  <InputLabel>Username</InputLabel>
                  <Input value={username} onChange={event => setUsername(event.target.value)} />
                </FormControl>
                <FormControl>
                  <InputLabel>Email</InputLabel>
                  <Input value={email} onChange={event => setEmail(event.target.value)} />
                </FormControl>
                <Button style={{marginTop: '30px'}}  disabled={!firstname, !lastname, !username, !email} variant="contained" color="primary" type="submit" onClick={addCustomers}>
                  Kunden anlegen
                </Button>
              </form>
            </div>
        </Modal>

                <div className="todos-content">
           
              <Customers 
                customers={customers}
              />
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
              <h1>Hello Clever Programmers !</h1>
            <form>
              <FormControl>
                <InputLabel>Write a Todo</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)} />
              </FormControl>
              <Button disabled={ !input } variant="contained" color="primary" type="submit" onClick={addTodo}>
                Add Todo
              </Button>
            </form>
              <ul>
                {todos.map((todo) => (
                  <Todo id={todo} todo={todo} />
                ))} 
              </ul>
            </div>
          }
      </div>
    </div>
  </div>  
  </>
  )
}
