import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Überprüfen Sie Ihren Posteingang für weitere Anweisungen.")
    } catch {
      setError("Zurücksetzen des Passwords fehlgeschlagen.")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}>
        <Card.Body>
          <h2 className="text-center mb-4">Password vergessen ?</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Password zurücksetzen
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Brauchst du einen Account ? <Link to="/signup">Anmelden</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
