import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../Firebase.init/Firebase.init";

const SocialMedia = () => {
        const [signInWithFacebook, facebookuser, facebookloading, facebookerror] = useSignInWithFacebook(auth);
    
        const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
        
    return (
        <div className='mb-5'>
            <div className='mb-2' ><button type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-[#3b5998] text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-[#6d8ed7] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>{signInWithFacebook()}}><span className='w-12 mr-1'>
            <i class="fab fa-facebook-f"></i></span> Sing in With Facebook</button>
            </div>
            <div className='mb-5'><button type="button" class="mb-2 w-full inline-block px-6 py-2.5 bg-[#4285F4] text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-[#819dcb] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>signInWithGoogle()}>
             <span className='w-12 mr-1'><i class="fab fa-google"></i></span>   Sing in With Google</button></div>
            
        </div>
    );
};

export default SocialMedia;