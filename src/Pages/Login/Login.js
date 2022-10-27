import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Card className='shadow border-0 p-5'>
            <Card.Body className='p-0'>
                <Card.Title className='text-center fs-3 fw-bold text-info mb-5'>Sign In</Card.Title>
                <Form>
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
                        <Button className='rounded-pill w-75 mt-3 fw-bold text-white' variant="info" type="submit">Log In</Button>
                    </div>
                </Form>
               <p className='text-center mt-3'>Don't have an account? <Link to="/register">Create one</Link></p>
            </Card.Body>
        </Card>
    );
};

export default Login;