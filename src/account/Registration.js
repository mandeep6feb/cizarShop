import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
function Registration(props) {
    return (
        <div className='App-header'>
        <Card  className='Card_outer_signup'>
            <Card.Body>
                <Card.Title className='signup_heading'>   Registration</Card.Title>
                <Form>
                <div className='display-flex'>
                <Form.Group className="mb-3 signup_heading-sub" controlId="formBasicEmail">
                        <Form.Label className='login_heading-sub-1'>First Name</Form.Label>
                        <Form.Control className='login_heading-sub-1-2' type="text" placeholder="Enter first name" />
                        <Form.Text className="text-muted">
                          
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3 signup_heading-sub" controlId="formBasicEmail">
                        <Form.Label className='login_heading-sub-1'>Last Name</Form.Label>
                        <Form.Control className='login_heading-sub-1-2' type="text" placeholder="Enter last name" />
                        <Form.Text className="text-muted">
                          
                        </Form.Text>
                    </Form.Group>
                    </div>
                   
                  
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
                    <Form.Group className="mb-3 login_heading-sub" controlId="formBasicEmail">
                        <Form.Label className='login_heading-sub-1'>Confirm Password</Form.Label>
                        <Form.Control className='login_heading-sub-1-2' type="password" placeholder="Enter confirm password" />
                        <Form.Text className="text-muted">
                          
                        </Form.Text>
                    </Form.Group>
             
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='login_heading-sub-1'>Phone Number</Form.Label>
                        <Form.Control className='login_heading-sub-1-2' type="password" placeholder="Phone Number" />
                    </Form.Group>
              

  
                   
                    <Button variant="primary" className='btn_login' type="submit">
                        Signup
                    </Button>
                  
                </Form>
            </Card.Body>
        </Card>

    </div>
    );
}

export default Registration;