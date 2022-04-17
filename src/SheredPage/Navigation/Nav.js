import { MenuIcon } from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Photos/logo/logoBlack.png';

const Nav = () => {
  const activestyle=({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      textDecoration : "none",
      color: isActive ? "#00B4D8" : "white",
    };
  };
    return (
        <nav className='md:flex bg-[#03045E] md:justify-between md:px-8 flex'>
           <div>
             <img src={img} alt="" className='cursor-pointer' />
           </div>
           <div className='md:flex md:gap-8 md:p-6  md:block hidden'>
           <NavLink to = "/" style={activestyle}>Home</NavLink>
            <NavLink to = "/checkout" style={activestyle}>CheckOut</NavLink>
            <NavLink to = "/registration" style={activestyle}>Sing Up</NavLink>
            <NavLink to = "/login" style={activestyle}>Login</NavLink>
            <NavLink to = "/blog" style={activestyle}>Blogs</NavLink>
            <NavLink to = "/about" style={activestyle}>About Me</NavLink>
           </div>
           <MenuIcon className="h-14 mt-4 mr-3 w-14 md:hidden text-white"/>
        </nav>
    );
};

export default Nav;