import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom';

import './navbar.css'

function NavHead(props) {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container className='mx-auto'>
                <Navbar.Brand id='navBrand'>
                    <Link to="/">
                        Moviely
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/addMovie'>
                            <Button variant='outline-dark'>Add Movie</Button>
                        </Link>
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