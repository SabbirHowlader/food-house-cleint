import React from 'react';
import person from '../../../Asset/person/person-10.webp'
const AboutUs = () => {
    return (
        <div className="hero min-h-screen w-5/6 mx-auto bg-base-200 my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={person} style={{height:400, width:350}} className="max-w-sm rounded-lg first-letter:shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Home made fresh food!</h1>
                    <h4 className='text-3xl py-4'>Good food Quality and yammi.</h4>
                    <p className="py-6">A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.</p>
                    <button className="btn btn-outline btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;