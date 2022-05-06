import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mb-5'>
            <h1 className='my-3'>Login</h1>
            <div className='border border-success p-3 rounded-3'>
                <Form className='p-3'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='px-3'>
                    <p className='m-0'>
                        New to Fitness Pro ?
                        <Link to='/register' className='text-decoration-none ps-1'>
                            Please Register
                        </Link>
                    </p>
                    <p>
                        Forget password ?
                        <button className='btn btn-link text-decoration-none border-0 p-1'>
                            Reset Password
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;