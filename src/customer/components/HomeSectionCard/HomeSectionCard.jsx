import React from 'react';

const HomeSectionCard = ({product}) => {
  return (
   
    <div>
   <a href="/productdetails"></a>
    <div  className='cursor-pointer flex flex-col  bg-white overflow-hidden w-[400px] h-[600px] mx-2 py-2'>
      
      <div className='h-[500px] w-[350px]'>
        <img className='object-cover object-top w-full h-full mt-2 items-center rounded-[14px] shadow shadow-lg '  src={product.image} alt=""  />
      </div>
      <div className='p-4 '>
           <h3  className='text-lg font-lg text-grey-900'>{product.brand} </h3>
           <p className='mt-2 text-lg text-red-700 font-bold'>{product.price}</p>
      </div>
    </div>
    </div>
    
  );
}

export default HomeSectionCard;
