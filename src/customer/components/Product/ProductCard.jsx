import React from 'react';
import './ProductCard.css'
import { useNavigate } from 'react-router-dom';
const ProductCard = ({product}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`product/${5}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer  '> 
    <a href='/productdetails'>
      <div>
        <img  className=' image h-full w-full object-cover object-left-top  rounded-lg' src={product.image} alt='' ></img>
      </div>
      </a>
      <div className='textPart bg-white p-3 '>
        <div>
          
          <p className='font-bold opacity-80'>{product.title}</p>
          <p>{product.brand}</p>
        </div>
        <div className=' flex items-center space-x-2'>
            <p className='font-semibold text-red-600' >{product.selling_price}</p>
            <p className='line-through opacity-50'>{product.price}</p>
            <p className='text-green-700'>{product.disscount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
