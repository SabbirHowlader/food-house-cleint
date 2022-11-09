import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard.js';

const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20 w-5/6 mx-auto'>
            <div className='text-center my-6'>
                <h1 className='text-5xl font-bold mb-3'>Our Food Service</h1>
                <p>We are provideing you best quality food ever. its healty and hygienic food<br /> its very crispy and yummy food.  </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4'>
                {
                    services.map(service => <ServiceCard
                      key={service._id}
                      service ={service}
                    ></ServiceCard>) 
                }
            </div>
            <div className='text-center pt-6'>
                <button className="btn btn-warning"><Link to='/service'>sell all here</Link></button>
            </div>
        </div>
    );
};

export default Service;