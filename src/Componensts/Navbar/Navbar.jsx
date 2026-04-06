import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar md:max-w-11/12 mx-auto work items-center">
            <div className="navbar-start items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Listed Books</NavLink></li>
                        <li><NavLink>Pages to Read</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#13131380] text-lg gap-6">
                    <li><NavLink>Home</NavLink></li>
                    <li><NavLink>Listed Books</NavLink></li>
                    <li><NavLink>Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end space-x-3 font-bold ">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;