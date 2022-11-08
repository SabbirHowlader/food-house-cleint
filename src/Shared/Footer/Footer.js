import React from 'react';
import logo from '../../Asset/logo/logo.jpg'

const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
            <div>
                <img src={logo} alt=""  style={{heigh:110, width:110}} className="rounded"/>
                <p>Home made Food Delivery Service.<br />Providing reliable food since 2009.</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a href='/' className="link link-hover">Burger</a>
                <a href='/' className="link link-hover">Pizza</a>
                <a href='/' className="link link-hover">Chicken Fry</a>
                <a href='/' className="link link-hover">Pasta</a>
            </div>
            <div>
                <span className="footer-title">Own Company</span>
                <a href='/' className="link link-hover">About us</a>
                <a href='/' className="link link-hover">Contact</a>
                <a href='/' className="link link-hover">Service</a>
                <a href='/' className="link link-hover">Order</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href='/' className="link link-hover">Terms of use</a>
                <a href='/' className="link link-hover">Privacy policy</a>
                <a href='/' className="link link-hover">Copiright policy</a>
            </div>
        </footer>
    );
};

export default Footer;