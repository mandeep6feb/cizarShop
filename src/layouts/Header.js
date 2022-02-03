import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap'
function Header(props) {
    return (
            <Row style={{ padding: '0px'}}>
                <Col xs={8} style={{ padding: '0px'}}>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">About</Nav.Link>
                                    <Nav.Link href="#link">Blog</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col xs={4} style={{ padding: '0px'}}>
                    <Navbar expand="lg" variant="light" bg="light">
                            <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    </Navbar>
                </Col>
                </Row>
    );
}

export default Header;