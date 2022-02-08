import React, {useState} from 'react';
import { Form, Card, Button, Row, Col } from 'react-bootstrap';
import { toaster, Fisrt_Name } from '../utilities/Constants'

function Registration() {
    const [signup, setSignup] = useState({fname: '',lname: '', email:'', number: '', confirm: '', password: '' })
    
    function handleChange(data) {
        setSignup(pre => ({ 
            ...pre,
            [data.target.name]: data.target.value
        }))
    }
    function submitData() {
        toaster(1, 'success')
        toaster(2, Fisrt_Name)
        toaster(3, 'info')
    }
    return (
        <div className='App-header'>
            <Card className='Card_outer_signup'>
                <Card.Body>
                    <Card.Title className='signup_heading'> Czar Registration</Card.Title>
                    <Form >
                        <Row>
                            <Col>
                                <Form.Group className="mb-3 ">
                                    <Form.Label className='login_heading-sub-1'>First Name</Form.Label>
                                    <Form.Control className='login_heading-sub-1-2' name="fname" onChange={(e) => handleChange(e)} value={signup.fname.trim().replace(/[^A-Za-z ]/, "")} type="text" placeholder="enter your first name" />
                                    <Form.Text className="text-muted">{Fisrt_Name}
                                    </Form.Text>
                                </Form.Group>
                                
                            </Col>
                            <Col>
                                <Form.Group className="mb-3 ">
                                    <Form.Label className='login_heading-sub-1'>Last Name</Form.Label>
                                    <Form.Control className='login_heading-sub-1-2' name="lname" onChange={(e) => handleChange(e)} value={signup.lname.trim().replace(/[^A-Za-z ]/, "")} type="text" placeholder="enter your last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='login_heading-sub-1'>Email</Form.Label>
                                    <Form.Control className='login_heading-sub-1-2' name="email" onChange={(e) => handleChange(e)} value={signup.email.trim()} type="email" placeholder="enter your email" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='login_heading-sub-1'>Phone</Form.Label>
                                    <Form.Control className='login_heading-sub-1-2' name="number" onChange={(e) => handleChange(e)}
                                            value={signup.number .toString()
                                            .replace(/[^0-9]/g, "").trim()}
                                             type="text" placeholder="enter your phone number" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='login_heading-sub-1'>Password</Form.Label>
                                    <Form.Control className='login_heading-sub-1-2' name="password" onChange={(e) => handleChange(e)} value={signup.password} type="text" placeholder="enter your password" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label className='login_heading-sub-1'>Confirm Password</Form.Label>
                                    <Form.Control className='login_heading-sub-1-2' name="confirm" onChange={(e) => handleChange(e)} value={signup.confirm} type="password" placeholder="confirm your password" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" className='btn_login' onClick={() => submitData()}>
                            Save
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        </div>
    );
}

export default Registration;