import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    if (googleUser || githubUser) {
        navigate('/home');
    }

    return (
        <div className='px-3 pb-2'>
            <div className='d-flex align-items-center mb-0'>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
                <p className='mx-3 pt-3 fw-bold'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
            </div>
            <p className='text-danger'>{googleError?.message}{githubError?.message}</p>
            <div className='d-flex justify-content-center mb-3'>
                <button onClick={() => signInWithGoogle()}
                    className='d-flex align-items-center justify-content-around rounded-3 w-25 fs-3 me-5 btn btn-light border-1 border-success'>
                    <i className="fa-brands fa-google text-primary"></i>
                    <p className='mb-0'>Google Sign in</p>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='d-flex align-items-center justify-content-around rounded-3 w-25 fs-3 ms-5 btn btn-light border-1 border-success'>
                    <i className="fa-brands fa-github"></i>
                    <p className='mb-0'>Github Sign in</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;