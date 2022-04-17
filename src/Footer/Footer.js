import React from 'react';

const Footer = () => {
    return (
        <div style={{ height: "180px" }} className='mt-5 text-center bg-dark text-light p-5'>
            <h5>Densist Shohel Rana</h5>
            <p>Copyright &copy; {(new Date().getFullYear())}</p>
            <p>All rights reserved</p>
        </div>
    );
};

export default Footer;