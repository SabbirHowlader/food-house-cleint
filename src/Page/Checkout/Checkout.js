import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = ({params}) => {
    const { title, price, rating, detail, img } = useLoaderData();
    
    return (
        <div className="card w-5/6 py-10 mx-auto shadow-xl">
            <img src={img} alt="" />
            <div className='py-6'>
                <h2 className='text-5xl font-bold mb-4' >{title}</h2>
                <p className='text-2xl font-bold'>Price: {price}Tk</p>
                <p className='text-2xl font-bold text-yellow-400'>Rating: {rating}</p>
                <p className='text-1xl'>{detail}</p>
            </div>
            <button className="btn btn-outline mb-5 btn-warning w-1/6 mx-auto"><Link to=''>Order Now</Link></button>
            <button className="btn btn-warning w-1/6 mx-auto"><Link to='/service'>Sell all</Link></button>
            
        </div>
        
    );
};

export default Checkout;