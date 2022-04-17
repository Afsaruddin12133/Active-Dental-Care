import React, { useEffect, useState } from 'react';
import Appointment from './HomeComponent/Appointment';
import Carousel from './HomeComponent/Carousel';
import Servics from './HomeComponent/Servics';

const Home = () => {
    const [data , setData] = useState()
    useEffect(()=>{
        fetch('Servics.json')
        .then(data => data.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='m-8 mt-5 '>
            <Carousel/>
         <div>
         <h1 className='text-5xl font-bold text-center mt-8 text-[#00B4D8]'>My Services</h1>
           <div className='md:grid md:grid-cols-3 md:gap-5 mt-8'>
           {
               data?data.map(info =>  <Servics key={info.id}  data={info} />) :""
           }
           </div>
         </div>
         <Appointment/>
        </div>
    );
};

export default Home;