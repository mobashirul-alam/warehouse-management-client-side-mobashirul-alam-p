import React from 'react';

const SocialLogin = () => {
    return (
        <div className='px-3'>
            <div className='d-flex align-items-center px-3 mb-1'>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
                <p className='mx-3 pt-3 fw-bold'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-dark'></div>
            </div>
            <div className='d-flex justify-content-center mb-3'>
                <button className='d-flex align-items-center justify-content-around rounded-3 w-25 fs-3 me-5 btn btn-light border-1 border-success'>
                    <i className="fa-brands fa-google text-primary"></i>
                    <p className='mb-0'>Google Sign in</p>
                </button>
                <button className='d-flex align-items-center justify-content-around rounded-3 w-25 fs-3 ms-5 btn btn-light border-1 border-success'>
                    <i className="fa-brands fa-github"></i>
                    <p className='mb-0'>Github Sign in</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;