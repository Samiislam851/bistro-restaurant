import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navOptions =  <>
    <NavLink to='/'   className={({ isActive, isPending }) =>isActive? "text-yellow-500": "" }>Home</NavLink>
    <NavLink to='/' className={({ isActive, isPending }) =>isActive? "active": "" }>Contact</NavLink>
    <NavLink to='/' className={({ isActive, isPending }) =>isActive? "active": "" }>Dashboard</NavLink>
    <NavLink to='/menu' className={({ isActive, isPending }) =>isActive? "active": "" }>Our Menu</NavLink>
    <NavLink to='/' className={({ isActive, isPending }) =>isActive? "active": "" }>Our Shop</NavLink> 
</>
    return (
        <div className='fixed z-10 w-full text-white '>
            <div className="navbar md:backdrop-blur-sm bg-gray-500 bg-opacity-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content text-gray-500 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52">
                        {navOptions}
                        </ul>
                    </div>
                    <a className=" normal-case text-white text-3xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5 px-1">
                   {navOptions}
                   </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;