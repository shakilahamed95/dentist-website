import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services'>
            <h1 className='title mt-5 text-primary'>My services</h1>
            <div className='service-container container'>
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;