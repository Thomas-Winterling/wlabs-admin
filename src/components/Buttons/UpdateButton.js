import React from 'react'
import EditIcon from '@material-ui/icons/Edit';

function UpdateButton() {

    const test = () => {
        console.log('Edit')
      }

    return (
        <>
            <EditIcon onClick={test} />
        </>
    )
}

export default UpdateButton
