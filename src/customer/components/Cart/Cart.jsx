import React from 'react';
import CartItems from './CartItems';

const Cart = () => {
  return (
    <div>

      <div className='lg:grid grid-cols-3 lg:px-16 relative mt-10'>
      
      <div className="col-span-2">   {[1,1,1,1].map((item)=><CartItems/>)}</div>
      
       <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0' >
         <div className="border p-4s"> 
         <p  className='uppercase font-bold opacity-60 pb-4'>price Details
          </p>
          <hr />
          <div className="space-y-3 font-semibold">
            <div className='flex justify-between pt-3 text-black'>
              <span>Price</span>
              <span>₹1,799</span>
            </div>

            <div className='flex justify-between pt-3 text-black'>
              <span>Discount</span>
              <span className='text-red-500'>₹-799</span>
            </div>

            <div className='flex justify-between pt-3 text-black'>
              <span>Delivery charge</span>
              <span className='text-green-500'>Free</span>
            </div>

            <div className='flex justify-between pt-3 text-black'>
              <span className='text-gray-900'> Total amount</span>
              <span className='text-green-500'>₹1000</span>
            </div>

          </div>
          <a href="/checkout">
          <button
                 
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
               CheakOut
                </button>
                </a>
          </div>
       </div>

       </div>
    </div>
  );
}

export default Cart;

