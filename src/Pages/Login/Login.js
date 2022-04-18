import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase.init/Firebase.init';
import SocialMedia from '../../SheredPage/SocialMedia/SocialMedia';

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [signInWithEmailAndPassword,user,loading,error, ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  console.log(loading)

  const handelresetpassword = async () =>{
    await sendPasswordResetEmail(email);
    toast("Send Email")
  }
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm p-10 mt-10 mb-12 m-auto">
            <h1 className='text-center text-3xl font-semibold mb-6'>Sing In</h1>
        <form>
          <div className="form-group mb-6">
            <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
            <input type="email" onBlur={(e)=>setEmail(e.target.value)} className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
              aria-describedby="emailHelp" placeholder="Enter email"  required/>
          </div>
          <div className="form-group mb-6">
            <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
            <input type="password"  onBlur={(e)=>setPassword(e.target.value)}  className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
              placeholder="Password" required />
          </div>
          <SocialMedia/>
          <ToastContainer />
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2" />
              <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
            </div>
            <button type='button' onClick={handelresetpassword}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
              password?</button>
          </div>
         
          <button type="submit" onClick={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(email, password)
              .then(()=>{
                navigate(from, { replace: true })
                toast('Login Successfull')
              })
              document.getElementById('exampleInputEmail2').value = "";
              document.getElementById('exampleInputPassword2').value = "";
              }} className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Sign in</button>
          <p className="text-gray-800 mt-6 text-center">Not a member? <button  onClick={()=>navigate("/registration")} 
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</button>
          </p>
        </form>
      </div>
    );
};

export default Login;