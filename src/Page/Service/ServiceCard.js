import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, time, delivery, rating, img, price, title, } = service;
    return (
        <div className="card card-compact w-70 bg-base-100 shadow-xl">
            <figure><img src={img} alt="food" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {price}Tk</p>
                <div className='gap-0'>
                    <p><span className='text-2xl text-bold'>Delivery : {delivery}</span></p>
                    <p><span className='text-2xl'>Time: {time}m</span></p>
                    <p><span>Rating: {rating}</span></p>
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-outline btn-warning">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;