import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'

function NavHead(props) {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand>Moviely</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Button variant='outline-dark'>Add Movie</Button>
                    </Nav>
                    <Nav>
                        <div className='d-flex justify-content-end align-items-center'>
                            <label htmlFor="movieAmount" className="me-2">Movie Count:</label>
                            <input type="number"
                                id="movieAmount"
                                className="w-25"
                                min={2}
                                max={10}
                                value={props.movieDispCount}
                                onChange={(ev) => {
                                    props.handleCounter(ev.target.value)
                                }} />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavHead