import { MenuIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../Firebase.init/Firebase.init';
import img from '../../Photos/logo/logoBlack.png';


const Nav = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
  const logout = () => {
    signOut(auth);
    toast("Logout Succefull")
  };
  
  const activestyle=({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      textDecoration : "none",
      color: isActive ? "#00B4D8" : "white",
    };
  };
    return (
        <nav className='md:flex  bg-[#03045E] md:justify-between md:px-8 flex'>
           <div>
             <img src={img} alt="" className='cursor-pointer' />
             <ToastContainer />
           </div>
           <div className='md:flex md:gap-8 md:p-6  md:block hidden'>
           <NavLink to = "/" style={activestyle}>Home</NavLink>
          {  user
          ? <button type="button" className=" text-white "onClick={logout} >Logout</button>
          :<NavLink to = "/login" style={activestyle}>Login</NavLink>}
            <NavLink to = "/blog" style={activestyle}>Blogs</NavLink>
            <NavLink to = "/about" style={activestyle}>About Me</NavLink>
            <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          class="rounded-full w-12"
         alt="Avatar"
/>
           </div>
           <MenuIcon className="h-14 mt-4 mr-3 w-14 md:hidden text-white"/>
        </nav>
    );
};

export default Nav;