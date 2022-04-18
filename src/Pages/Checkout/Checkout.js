import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init/Firebase.init';

const Checkout = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm  mt-3 mb-3 m-auto">
              <h1 className='text-center text-3xl font-semibold mb-6'>Payment Details</h1>
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
            <input type="email" value={user?user.email :""} className="form-control block
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
              placeholder="Email address" readOnly />
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
          <input id="ccn" type="tel" className='form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="Credit Card Number (xxxx xxxx xxxx xxxx)"/>
          </div>
          <div className="form-group mb-6">
            <input type="password" className="form-control block
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
              placeholder="Card Password" />
          </div>
          <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span className='mr-52'>Subtotal:</span><span>$7,197.00</span>
            </div>
          <div class="d-flex justify-content-between total font-weight-bold mt-4 mb-5">
              <span className='mr-56'>Total:</span><span>$7,197.00</span>
            </div>
          <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            leading-tight
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out text-lg">Pay {"$7,197"}</button>
        </form>
      </div>
    );
};

export default Checkout;