import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Link className='fs-2 text-white fw-bold text-decoration-none' to='/'>Dev Hero</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Link className='text-white fs-5 fw-semibold me-3 text-decoration-none' to="/">Home</Link>
                            <Link className='text-white fs-5 fw-semibold me-3 text-decoration-none' to="/faq">FAQ</Link>
                            <Link className='text-white fs-5 fw-semibold me-3 text-decoration-none' to="/blog">Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav className="m-auto">
                        <Link className='btn btn-outline-dark rounded-pill fw-semibold shadow-sm me-2' to="/login">Log In</Link>
                        <Link className='btn btn-outline-dark rounded-pill fw-semibold shadow-sm' to="/register">Register</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;