import React from 'react';
import person from '../../../Asset/person/person img.jfif'
const AboutUs = () => {
    return (
        <div className="hero min-h-screen w-5/6 mx-auto bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={person} style={{height:400, width:350}} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;