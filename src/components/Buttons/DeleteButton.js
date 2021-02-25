import React from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'

function DeleteButton() {

  const test = () => {
    console.log('Delete')
  }

    return (
        <>
          <DeleteForeverIcon onClick={test} />  
        </>
    )
}

export default DeleteButton
