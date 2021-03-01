import React, { useState } from "react"
import Table from 'react-bootstrap/Table';
import { useAuth } from "../contexts/AuthContext"
import DeleteButton from './buttons/DeleteButton'
import UpdateButton from './buttons/UpdateButton'

export default function Todos() {
    const { currentUser } = useAuth()
    console.log(currentUser)
    // letze anmeldung currentUser.metadata.lastSignInTime
    // registriert currentUser.metadata.creationTime
    // Email currentUser.email

    // https://bigcodenerd.org/get-all-users-auth-firebase-cloud-functions/
    // https://firebase.google.com/docs/auth/admin/manage-users
    
  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>E Mail</th>
      <th>Registriert seid</th>
      <th>Letzte Anmeldung</th>
      <th>Aktionen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>vorname</td>
      <td>nachname</td>
      <td>username</td>
      <td>email</td>
      <td>registeriert</td>
      <td>letzte Anmeldung</td>
      <td>
          <DeleteButton />
          <UpdateButton />
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>vorname</td>
      <td>nachname</td>
      <td>username</td>
      <td>email</td>
      <td>registeriert</td>
      <td>letzte Anmeldung</td>
      <td>
          <DeleteButton />
          <UpdateButton />
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>vorname</td>
      <td>nachname</td>
      <td>username</td>
      <td>email</td>
      <td>registeriert</td>
      <td>letzte Anmeldung</td>
      <td>
          <DeleteButton />
          <UpdateButton />
      </td>
    </tr>
    <tr>
      <td>4</td>
      <td>vorname</td>
      <td>nachname</td>
      <td>username</td>
      <td>email</td>
      <td>registeriert</td>
      <td>letzte Anmeldung</td>
      <td>
          <DeleteButton />
          <UpdateButton />
      </td>
    </tr>
    <tr>
      <td>5</td>
      <td>vorname</td>
      <td>nachname</td>
      <td>username</td>
      <td>email</td>
      <td>registeriert</td>
      <td>letzte Anmeldung</td>
      <td>
          <DeleteButton />
          <UpdateButton />
      </td>
    </tr>
  </tbody>
</Table>
  );
}