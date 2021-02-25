
import React, { useState } from 'react'
import { List, ListItem, ListItemText, Button, Modal } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import db from '../firebase'
import { makeStyles } from '@material-ui/core/styles'

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

function Todo(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [modalStyle] = useState(getModalStyle);
    const [update, setUpdate] = useState('')
    
    const updateTodo = () => {
        // Update the todo with the new input text
        db.db.collection('todos').doc(props.todo.id).set({
            todo: update
        }, {merge: true})
        setOpen(false)
        console.log(db.collection('todos').doc())
    }

    const DeleteTodo = () => {
        db.db.collection('todos').doc(props.todo.id).delete()
    }

    
    // https://react-bootstrap.github.io/components/modal/
    
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div style={modalStyle} className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={update} onChange={event => setUpdate(event.target.value)} />
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List key="123" className="todo__list">
            <ListItem key={props.todo.id}>
                <ListItemText key="dsfsd" primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={DeleteTodo} />
        </List>
        </>
    )
}

export default Todo
