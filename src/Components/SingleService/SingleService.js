import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleService.css'


const SingleService = ({ service }) => {
    const { name, price, description, img } = service
    const navigate = useNavigate()
    const handleCheckout = event => {
        navigate("/checkout")
    }
    return (
        <div>
            <div className="card shadow-lg">
                <img src={img} className="card-img-top service-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Service Charge TK:{price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><button onClick={handleCheckout} type="button" className="btn btn-primary">Book Service</button></p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;