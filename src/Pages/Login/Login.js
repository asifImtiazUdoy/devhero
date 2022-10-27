import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
        const [error, setError] = useState('');
        const { signIn, setLoading } = useContext(AuthContext);
        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || '/';
    
        const handleSubmit = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
    
            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset();
                    setError('');
                    navigate(from, {replace:true});
                })
                .catch(error => {
                    console.error(error)
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    return (
        <Card className='shadow border-0 p-5'>
            <Card.Body className='p-0'>
                <Card.Title className='text-center fs-3 fw-bold text-info mb-5'>Sign In</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button className='rounded-pill w-75 mt-3 fw-bold text-white' variant="info" type="submit">Log In</Button>
                    </div>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
               <p className='text-center mt-3'>Don't have an account? <Link to="/register">Create one</Link></p>
            </Card.Body>
        </Card>
    );
};

export default Login;