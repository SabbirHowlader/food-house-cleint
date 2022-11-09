
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Checkout = () => {
    const { title, price, rating, detail, img } = useLoaderData();

    return (

        <div>
            <div className="card w-5/6 my-10 pb-6 mx-auto shadow-xl">
                <img src={img} alt="" />
                <div className='py-6'>
                    <h2 className='text-5xl font-bold mb-4' >{title}</h2>
                    <p className='text-2xl font-bold'>Price: {price}Tk</p>
                    <p className='text-2xl font-bold mb-5 text-yellow-400'>Rating: {rating}</p>
                    <p className='text-1xl'>{detail}</p>
                </div>
                <button className="btn btn-outline mb-5 btn-warning w-1/6 mx-auto"><Link to=''>Order Now</Link></button>
                <button className="btn btn-warning w-1/6 mx-auto"><Link to='/service'>Sell all</Link></button>
            </div>
            <div className='my-20 w-5/6 mx-auto'>
                <h2 className='text-5xl font-bold mb-4'>Add Review</h2>
                 <Review></Review>
            </div>

        </div>


    );
};

export default Checkout;