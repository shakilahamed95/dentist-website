import React from 'react';
import notfound from '../../images/notfound.jpg'
import './Notfound.css'

const Notfound = () => {
    return (
        <div className="not-found">
            <h3 className='text-danger ms-4'>Sorry, the page you looking for is not found</h3>
            <img src={notfound} alt="Paris" />
        </div>
    );
};

export default Notfound;