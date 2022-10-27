import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, setLoading, providerLogin, updateUser } = useContext(AuthContext);

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }
        updateUser(profile)
        .then(result => { })
        .catch(error => {console.log(error) })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUpdateUserProfile(name);
                form.reset();
                setError('');
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const githubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <Card className='shadow border-0 p-5'>
            <Card.Body className='p-0'>
                <Card.Title className='text-center fs-3 fw-bold text-info mb-5'>Sign Up</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Enter Your Password" />
                    </Form.Group>
                    <div className="text-center">
                        <Button className='rounded-pill w-75 mt-3 fw-bold text-white' variant="info" type="submit">Sign Up</Button>
                    </div>
                </Form>
                <div className="text-center">
                    <p className="my-3 fw-bold fs-4 mb-0">Or</p>
                    <Button onClick={googleSignIn} className='rounded-pill w-75 mt-3 fw-bold' variant="outline-dark" type="submit"><FaGoogle></FaGoogle> &nbsp; Log In with Google</Button>
                    <Button onClick={githubSignIn} className='rounded-pill w-75 mt-3 fw-bold' variant="outline-dark" type="submit"><FaGithub></FaGithub> &nbsp; Log In with Github</Button>
                    <p className='text-center mt-3'>Already have an account? <Link to="/login">Sign In</Link></p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Register;