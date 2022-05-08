import React from 'react';

const Contact = () => {
    return (
        <div className='bg-primary'>
            <div className='container'>
                <div className='row py-5 text-light'>
                    <div className='col-12 col-md-6'>
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
                    <div className='col-12 col-md-6'>
                        <h3 className='mb-3'>Newsletter</h3>
                        <p>
                            By subscribing to our newsletter, you will always be up-to-date about our inventory!
                        </p>
                        <input
                            className='w-75 p-1 mb-2'
                            type="email" name="email" id="" placeholder='Email Address' />
                        <br />
                        <button className='btn btn-warning'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;