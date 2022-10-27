import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Card className='shadow border-0 p-5'>
            <Card.Body className='p-0'>
                <Card.Title className='text-center fs-3 fw-bold text-info mb-5'>Sign Up</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button className='rounded-pill w-75 mt-3 fw-bold text-white' variant="info" type="submit">Sign Up</Button>
                    </div>
                </Form>
                <div className="text-center">
                    <p className="my-3 fw-bold fs-4 mb-0">Or</p>
                    <Button className='rounded-pill w-75 mt-3 fw-bold' variant="outline-dark" type="submit"><FaGoogle></FaGoogle> &nbsp; Log In with Google</Button>
                    <Button className='rounded-pill w-75 mt-3 fw-bold' variant="outline-dark" type="submit"><FaGithub></FaGithub> &nbsp; Log In with Github</Button>
                    <p className='text-center mt-3'>Already have an account? <Link to="/login">Sign In</Link></p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Register;