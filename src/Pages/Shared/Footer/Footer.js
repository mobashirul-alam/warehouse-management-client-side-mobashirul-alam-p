import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo/Fitness-Pro.png'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <div className='bg-dark py-3 m-0 row'>
            <div className='col-12 col-md-6 mb-3 mb-md-0 text-center'>
                <div className="footer">
                    <i className="fa-brands fa-facebook-f fs-3"></i>
                    <i className="fa-brands fa-twitter fs-3"></i>
                    <i className="fa-brands fa-instagram fs-3"></i>
                    <i className="fa-brands fa-linkedin-in fs-3"></i>
                </div>
                <div>
                    <Link to='/home' className='text-decoration-none text-light m-2'>Home</Link>
                    <Link to='/blogs' className='text-decoration-none text-light m-2'>Blogs</Link>
                    <Link to='/login' className='text-decoration-none text-light m-2'>Login</Link>
                    <Link to='/register' className='text-decoration-none text-light m-2'>Register</Link>
                </div>
            </div>
            <div className='col-12 col-md-6 my-auto'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div>
                        <img width={100} src={logo} alt="" />
                    </div>
                    <p className='text-light ms-3 mb-0'>
                        <span>All rights reserved by Fitness-Pro Equipment Warehouse</span>
                        <br />
                        <span>Copyright © Fitness-Pro Equipment Warehouse {year}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;