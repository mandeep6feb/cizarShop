import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
function Header(props) {
    return (
            <Row style={{ padding: '0px'}}>
                <Col xs={8} style={{ padding: '0px'}}>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Navbar.Brand className="header-nav" href="#">Navbar</Navbar.Brand>
                                    <Nav.Link className="header-nav" href="#home">Home</Nav.Link>
                                    <Nav.Link className="header-nav" href="#link">About</Nav.Link>
                                    <Nav.Link className="header-nav" href="#link">Blog</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
                <Col xs={4} style={{ padding: '0px'}}>
                    <Navbar expand="lg" variant="light" bg="light">
                        <div class="input-group search_width">
                            <input type="search" class="form-control rounded " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary">search</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-outline-primary ml-2">Login</button>
                        </div>
                    </Navbar>
                </Col>
            </Row>
    );
}

export default Header;