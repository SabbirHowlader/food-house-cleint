import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <div className='items-center'>
                <Slider></Slider>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;