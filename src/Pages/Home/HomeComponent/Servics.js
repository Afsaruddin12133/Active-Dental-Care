import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Servics = ({data}) => {
  const {Name,Price,img,Description} = data;
    return (
        <div className="mt-3">
        <div className="rounded-lg shadow-lg bg-white ">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg hover:scale-90  transition delay-75 rounded" src={img}alt=""/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-2xl font-medium mb-2">{Name}</h5>
         <div className='h-[200px]'>
         {
             Description.map(item => <h4> <CheckCircleIcon className='w-8 text-green-500 inline'/><span> {item}</span></h4>)
           }
         </div>
            <h5 className='text-2xl mb-5 font-bold '>Price : ${Price}</h5>
           
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Servics;