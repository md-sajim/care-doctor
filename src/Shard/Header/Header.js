import React from 'react';
import logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <div className="navbar h-20 pt-12 mb-6  text-xl font-semibold text-slate-600 font-sans">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                        <li><button className="btn btn-outline btn-error normal-case">Appointment</button></li>
                    </ul>
                </div>

                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <button className="btn btn-outline btn-error normal-case">Appointment</button>
            </div>
        </div>
    );
};

export default Header;