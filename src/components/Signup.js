import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

function Signup() {
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group>
                            <From.Label>Email</From.Label>
                            <From.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group>
                            <From.Label>Email</From.Label>
                            <From.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group>
                            <From.Label>Email</From.Label>
                            <From.Control type="password" ref={passwardConfirmRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
            </div>
        </>
    )
}

export default Signup
