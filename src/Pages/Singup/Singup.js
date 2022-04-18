import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase.init/Firebase.init';
import SocialMedia from '../../SheredPage/SocialMedia/SocialMedia';


const Singup = () => {
   const [ createUserWithEmailAndPassword,  user,  loading, error, ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const [email,setEmail] = useState({value:"",error:''})
  const [password,setPassword] = useState({value:"",error:''})
  const [confirmpassword,setConfirmpassword] = useState({value:"",error:''})
  const handelemail = (email) =>{
       if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        setEmail({value:email,error:""})
       }else{
         setEmail({value:"",error:"Invalid Email"})
       }
  }
  const handelpassword = (password) =>{
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/.test(password)){
      setPassword({value:password,error:""})
    }else{
      setPassword({value:"",error:"Please Include must uppercase,lowercase ,special character,number"})
    }
  }
  const handelconfirmpass = (confirmpassword) =>{
      if(confirmpassword == password.value){
        setConfirmpassword({value:confirmpassword,error:""})
      }else{
        setConfirmpassword({value:"",error:"Did not match "})
      }
  }
  let navigate = useNavigate();
    return (
        <div className="block  rounded-lg shadow-lg bg-white max-w-md p-10 mt-10 mb-12 m-auto">
            <h1 className='text-center text-3xl font-semibold mb-6'>Sing Up</h1>
        <form onSubmit={(e) => {
              e.preventDefault();
               createUserWithEmailAndPassword(email.value, password.value)
               toast('Please Check your Email and Complete Sing Up')
               navigate('/home')
              document.getElementById('exampleInput125').value = "";
              document.getElementById('firstInput123').value = "";
              document.getElementById('passwordInput126').value = "";
              document.getElementById('ConfirmpasswordInput126').value = "";
              document.getElementById('secondInput124').value = "";
              }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
            <ToastContainer />
              <input type="text" className="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="firstInput123"
                aria-describedby="emailHelp123" placeholder="First name" required />
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="secondInput124"
                aria-describedby="emailHelp124" placeholder="Last name" required />
            </div>
          </div>
          <div className="form-group mb-6">
            <input type="email" onBlur={(e)=>handelemail(e.target.value)} className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Email address" required />
          </div>
          {
            email?.error && <p className='text-red-600'>{email.error}</p>
          }
          <div className="form-group mb-6">
            <input type="password" onBlur={(e)=>handelpassword(e.target.value)}  className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="passwordInput126"
              placeholder="Password" required />
          </div>
          {
            password?.error && <p className='text-red-600'>{password.error}</p>
          }
          <div className="form-group mb-6">
            <input type="password" onBlur={(e)=>handelconfirmpass(e.target.value)} className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="ConfirmpasswordInput126"
              placeholder="Confirm Password" required />
          </div>
          {
            confirmpassword?.error && <p className='text-red-600'>{confirmpassword.error}</p>
          }
          <SocialMedia/>
         
          <button type="submit" className="
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
            ease-in-out">Sign up</button>
        </form>
      </div>
    );
};

export default Singup;