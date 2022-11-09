import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';


const Review = () => {
    const { _id, title, price } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email= user?.email || 'unregister';
        const phone = form.phone.value;
        const message = form.message.value;

        const review ={
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message,
        }

    }
    return (
        <form onSubmit={handlePlaceReview} >
            <h2 className='text-4xl text-orange-600 mb-4'>You are About to order {title}</h2>
            <h4 className='text-4xl font-bold mb-4'>Price: {price}Tk</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input name="firstName" type="text" placeholder="Fast Name" className="input input-bordered w-full" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" />
            </div> 
            <textarea  name="message"className="textarea textarea-bordered w-full  mb-4" placeholder="Your Message"></textarea>
            <input className='btn btn-warning' type="submit" value="Place Your Review" />
        </form>
    );
};

export default Review;