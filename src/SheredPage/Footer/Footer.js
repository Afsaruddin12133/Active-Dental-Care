import React from 'react';
import img from '../../Photos/logo/logoBlack.png';
import './Footer.css';

const Footer = () => {
    let data = new Date();
    let year = data.getFullYear()
    return (
        <div className='bg-[#0f2b41] text-[#DDDDDD] '>
            <div className='grid md:grid-cols-3 '>
             <div className='drop-shadow-lg p-4 hidden md:block'>
                 <img src={img} alt="" />
                 <p>Active Dental care is the newest dental practice in the township of Branchburg in Somerset County, New Jersey. Each patient is treated with utmost importance, in a manner consistent with the care that we would provide to our own families. By providing excellent oral care, we hope to always improve the health of the community that we serve.</p>
             </div>
             <div className='drop-shadow-lg'>
                 <h1 className='text-center text-2xl mb-10 p-4 mt-4'>CONTACT US</h1>
                 <h3>Phone :01835487029 </h3>
                 <h3>Email :afsaruddin12133@gmail.com </h3>
                 <h3>Address :Dhaka,Mirpur,Shwrapara</h3>
             </div>
             <div className='drop-shadow-lg'>
                 <h1 className='text-center text-2xl mb-10 p-4 mt-4'>WORKING HOURS</h1>
                 <h3>Monday to Friday: 08:00 AM - 17:00 pm</h3>
                 <h3>Saturday: 09:00 AM - 15:00 pm</h3>
                 <h3>Sunday: Closed </h3>
             </div>
            </div>
            <div className='text-center text-xl mt-8'>Copyright © {year}. All Rights Reserved.</div>
        </div>
    );
};

export default Footer;