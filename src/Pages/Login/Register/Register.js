import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    return (
        <div className='container mb-5'>
            <h1 className='mt-2 mb-3 display-6 text-center'>Create your account</h1>
            <div className='border border-success p-3 rounded-3'>
                <Form className='p-3'>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            label='Accept our Privacy Policy and Terms of Service' />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Register
                    </Button>
                </Form>
                <div className='px-3'>
                    <p>
                        Already have an account ?
                        <Link to='/login' className='text-decoration-none ps-1'>
                            Please Login
                        </Link>
                    </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;