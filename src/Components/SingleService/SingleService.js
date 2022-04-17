import React from 'react';
import './SingleService.css'


const SingleService = ({ service }) => {
    const { name, price, description, img } = service
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top service-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Service Charge TK:{price}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><button type="button" class="btn btn-primary">Book Service</button></p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;