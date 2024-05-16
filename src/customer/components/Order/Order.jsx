import { Grid } from '@mui/material';
import React from 'react';
import OrderCard from './OrderCard';

const orderStatus=[
  {lable:"On the way" , value:"on_the_way"},
  {lable:"Deliverd" , value:"delivered"},
  {lable:"Canclled" , value:"cancelled"},
  {lable:"Returned" , value:"returned"},
]




const Order = () => {
  return (
    <div className=' px-5 lg:px-20' >
      <Grid container sx={{justifyContent:"space-between"}}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5   sm:m-1" >
            <h1 className="font-bold text-lg ">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className='font-semibold'>ORDER STATUS</h1>
            {orderStatus.map((option)=><div className='flex items-center'>
              <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500'/>
              <label  className=" ml-3 text-sm text-gray-600"hltmlFor={option.value}>
                {option.lable}
              </label>
            </div>)}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>

          <div className='space-y-4'>{[1,1,1,1,1].map((item)=><OrderCard/>)}
      </div>

        </Grid>
      </Grid>
    </div>
  );
}

export default Order;