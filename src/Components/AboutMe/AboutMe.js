import React from 'react';
import mypic from '../../images/mypic.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div>
            <div className='my-img'>
                <img src={mypic} alt="" />
            </div>
            <div className=' mt-4'>
                <h1 className='text-center mt-3'> Md. Shakil Ahamed</h1>
                <p>Actually, I was a little confused about my goal during my childhood period. But after getting admission as an information and communication technology student I fixed my dream to be a programmer. I learn several programming languages in my campus life and wish to be a good software engineer. It was not easy for me to choose one perfect branch of this sector but currently, I am focusing to be a good frontend web developer. Now my one and only goal are to be the best frontend web developer within this year. Programming-hero is a platform that helps me to make my journey easy towards my goal. Their instruction and guidelines and daily base work make me busy and make me think about programming each and every time. They make me believe that I can do it and I will surely do it with their help. All those words are coming from my heart and I really believe that by the grace of almighty Allah, with the guideline of the programming-hero team, and with my hard work I will surely achieve my goal very soon.</p>
            </div>
        </div>
    );
};

export default AboutMe;