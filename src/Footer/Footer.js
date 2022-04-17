import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='footer'>
            <div style={{ height: "180px" }} className='mt-5 text-center bg-dark text-light p-5'>
                <h5>Densist Shohel Rana</h5>
                <p>Copyright &copy; {(new Date().getFullYear())}</p>
                <p>All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;