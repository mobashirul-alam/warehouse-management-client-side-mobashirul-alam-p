import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div>
                <h3 className='mb-3'>Contact Us</h3>
                <p>
                    <i className="fa-solid fa-location-dot"></i>
                    <span className='fw-bold mx-3'>Address :</span>
                    221B Baker Street, London, England
                </p>
                <p>
                    <i className="fa-solid fa-phone"></i>
                    <span className='fw-bold mx-3'>Phone :</span>
                    1-000-2558-255
                </p>
                <p>
                    <i className="fa-solid fa-envelope"></i>
                    <span className='fw-bold mx-3'>Email :</span>
                    ourMail1@wemail.com
                </p>
            </div>
        </div>
    );
};

export default Contact;