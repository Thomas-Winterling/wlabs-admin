import React, { useState } from 'react'
import { Button, Modal } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import EditIcon from '@material-ui/icons/Edit';
import db from '../../firebase'
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

function Customer(props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [modalStyle] = useState(getModalStyle);
    const [update, setUpdate] = useState('')
    
    const updateCustomer = () => {
        // Update the todo with the new input text
        db.db.collection('customers').doc(props.customer.id).set({
            firstname: update
        }, {merge: true})
        setOpen(false)
    }

    const DeleteCustomer = () => {
        db.db.collection('customers').doc(props.customer.id).delete()
    }

    console.log(props.customer.timestamp)
    
    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false)}
        >
            <div style={modalStyle} className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.customer.firstname} value={update} onChange={event => setUpdate(event.target.value)} />
                <Button onClick={updateCustomer}>Update Todo</Button>
            </div>
        </Modal>
        <tr>
            <td>1</td>
            <td>{props.customer.firstname}</td>
            <td>{props.customer.lastname}</td>
            <td>{props.customer.username}</td>
            <td>{props.customer.email}</td>
            <td>{props.customer.registration}</td>
            <td>letzte Anmeldung</td>
            <td>
                <DeleteForeverIcon onClick={DeleteCustomer} />
                <EditIcon onClick={e => setOpen(true)}></EditIcon>
            </td>
        </tr>
        </>
    )
}

export default Customer