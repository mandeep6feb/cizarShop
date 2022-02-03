import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function LoginForUser(props) {
    return (
        <div className='App-header'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>24Seven Login</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Button variant="primary">
                            <Link to='/register'>Sign Up</Link>
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
}

export default LoginForUser;