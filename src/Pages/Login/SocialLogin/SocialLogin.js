import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    if (googleLoading || githubLoading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    if (googleUser || githubUser) {
        navigate(from, { replace: true });
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
                    className='d-md-flex align-items-center justify-content-around rounded-3 w-25 fs-3 me-5 btn btn-light border-1 border-success'>
                    <i className="fa-brands fa-google text-primary"></i>
                    <p className='mb-0'>Google Sign in</p>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='d-md-flex align-items-center justify-content-around rounded-3 w-25 fs-3 ms-5 btn btn-light border-1 border-success'>
                    <i className="fa-brands fa-github"></i>
                    <p className='mb-0'>Github Sign in</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;