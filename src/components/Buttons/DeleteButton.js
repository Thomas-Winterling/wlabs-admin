import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function DeleteButton() {
    return (
        <>
          <DeleteForeverIcon onClick={console.log('Delete')} />  
        </>
    )
}

export default DeleteButton
