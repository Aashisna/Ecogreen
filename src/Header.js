import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Blogs from './Blogs';
import './Style.css';
const shoot = () => {
    alert("Visit the contact page for donating!");
}
export default function Header() {
    return (
        <>
            <div className='n'>
                <section>
                    <nav className='header'>
                        <div className='container'>
                            <div className='row '>
                                <div className='col-lg-12'>
                                    <ul className='py-2'>
                                        <li className='px-2'><span><i className="bi bi-envelope icon"></i>Email:</span> <a href="https://www.google.com/account/about/">aashisnathapaliya@gmail.com</a></li>
                                        <li className='px-5 fs-5'><span><i className="bi bi-telephone icon"></i>Call Us:</span> +977-9843479915</li>
                                        <li className='px-5 fs-5'><span><i className="bi bi-map icon"></i>Location:</span> Bidur-1,Nuwakot</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>
                <section>
                    <div className='row'>
                        <div className='col-lg-4 hd container tp'>
                            <li><h6>GREEN Environment Theme</h6></li>
                        </div>
                        <div className='col-lg-8'>
                            <ul className='top py-2 container'>
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/blogs">Blogs</a></li>
                                <li><a href="/contacts">Contacts</a></li>
                                {/* <li><a href="/"></a><i className="bi bi-arrow-through-heart icon"></i>Donate Now!</li> */}
                                <li> <a href="/"></a><button onClick={(shoot)} className="bg-dark text-light p-1 btn "><i className="bi bi-arrow-through-heart icon"></i> Donate Now!</button></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
