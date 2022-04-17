import React from 'react';
import img from "../../../Photos/Doctor/pexels-antoni-shkraba-5215024 (1).jpg";

const Appointment = () => {
    return (
     <div>
         <h1 className='text-center text-4xl mt-5 font-semibold'>Doctor Appointment</h1>
           <div className='md:flex md:gap-10 mt-8'>
            <div className="block p-6 rounded-lg shadow-lg bg-white md:w-2/4">
        <form>
          <div className="form-group mb-6">
            <input type="text" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Name" />
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Email address" />
          </div>
          <div className="form-group mb-6">
            <input type="phone" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Phone" />
          </div>
          <div className="form-group mb-6">
            <input type="date" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Date" />
          </div>
          <div className="form-group mb-6">
            <textarea
            className="
              form-control  block   w-full px-3 py-1.5 text-basefont-normal   text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Your Message"
          ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6 mt-2">
            <input type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87"  />
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck87">Send me a copy of this message</label>
          </div>
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
            ease-in-out">Send</button>
        </form>
      </div>
      <div className='md:w-2/4 p-12 border shadow'>
        
        <div>
        <img
           src={img}
           className="rounded-lg shadow w-32 h-26 flex m-auto"
           alt="Avatar"
/>
        <h1 className='text-2xl font-semibold m-3 text-center'>Dr: Mike Roger</h1>
        <blockquote className='text-xl font-semibold m-3 text-center'><i>Principal Dentist</i></blockquote>
        <p className='text-xl'> Hello there , I am Dr: Mike Roger. i dentist, also known as a dental surgeon, is a health care professional who specializes in dentistry. The dentist's supporting team aids in providing oral health services. The dental team includes dental assistants, dental hygienists, dental technicians, and sometimes dental therapists.</p>
      
      </div>
      </div>
       </div>
     </div>
    );
};

export default Appointment;