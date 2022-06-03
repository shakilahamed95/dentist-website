import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;