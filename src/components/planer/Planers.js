import React, { useState } from "react"
import Table from 'react-bootstrap/Table';
import { useAuth } from "../../contexts/AuthContext"
import Customer from './Customer'

export default function Customers({ customers }) {
    const { currentUser } = useAuth()
    // letze anmeldung currentUser.metadata.lastSignInTime
    // registriert currentUser.metadata.creationTime
    // Email currentUser.email

    // https://bigcodenerd.org/get-all-users-auth-firebase-cloud-functions/
    // https://firebase.google.com/docs/auth/admin/manage-users
    
  return (
    <Table striped bordered hover>
  <thead key="1">
    <tr key="2">
      <th key="3">#</th>
      <th key="4">First Name</th>
      <th key="5">Last Name</th>
      <th key="6">Username</th>
      <th key="7">E Mail</th>
      <th key="8">Registriert seid</th>
      <th key="9">Letzte Anmeldung</th>
      <th key="10">Aktionen</th>
    </tr>
  </thead>
  <tbody key="11">
    {customers.map((customer, index) => (
        <Customer key={index} id={customer} customer={customer} />
    ))}
  </tbody>
</Table>
  );