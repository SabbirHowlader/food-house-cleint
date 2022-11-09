import React from 'react';
import useTitle from '../../../Hook/useTitle';
import Service from '../../Service/Service';
import AboutUs from '../AboutUs/AboutUs';
import Slider from '../Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;