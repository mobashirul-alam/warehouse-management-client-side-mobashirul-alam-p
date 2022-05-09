import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [agreePolicyTerms, setAgreePolicyTerms] = useState(false);
    const [err, setErr] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    useEffect(() => {
        if (error || updateError) {
            const errMessage = <p>Error: {error?.message} {updateError?.message}</p>;
            setErr(errMessage);
        }
    }, [error, updateError]);

    if (loading || updating) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name })
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='container mb-5'>
            <h1 className='mt-2 mb-3 display-6 text-center'>Create your account</h1>
            <div className='border border-success p-3 rounded-3'>
                <Form onSubmit={handleRegister} className='p-3'>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={() => setAgreePolicyTerms(!agreePolicyTerms)}
                            type="checkbox"
                            label='Accept our Privacy Policy and Terms of Service' />
                    </Form.Group>
                    <Button
                        variant="secondary"
                        type="submit"
                        disabled={!agreePolicyTerms}
                    >
                        Register
                    </Button>
                </Form>
                <div className='px-3'>
                    <p className='text-danger'>{err}</p>
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