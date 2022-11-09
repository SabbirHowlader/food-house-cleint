import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Asset/Login/login.jpg'
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const  password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .then(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen w-5/6 mx-auto bg-base-200 my-20">
            <div className="hero-content gap-5 grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4 rounded-lg' src={img} style={{height:430}} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login Now</h1>
                    <form onSubmit={ handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Login" />
                        </div>
                        <p>New Food House ? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;