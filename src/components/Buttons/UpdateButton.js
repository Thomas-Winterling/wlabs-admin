import React from 'react'
import EditIcon from '@material-ui/icons/Edit';

function UpdateButton() {
    return (
        <>
            <EditIcon onClick={console.log('Edit')} />
        </>
    )
}

export default UpdateButton
