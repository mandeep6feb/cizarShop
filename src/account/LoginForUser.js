import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
function LoginForUser(props) {
    return (
        <div className='App-header'>
            <Card  className='Card_outer'>
                <Card.Body>
                    <Card.Title className='login_heading'>Czar Login</Card.Title>
                    <Form>
                        <Form.Group className="mb-3 login_heading-sub" controlId="formBasicEmail">
                            <Form.Label className='login_heading-sub-1'>Email address</Form.Label>
                            <Form.Control className='login_heading-sub-1-2' type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='login_heading-sub-1'>Password</Form.Label>
                            <Form.Control className='login_heading-sub-1-2' type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" className='btn_login' type="submit">
                            Login
                        </Button>
                        <Button variant="primary" className='btn_login'> Signup
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
}

export default LoginForUser;