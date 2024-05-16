import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTraker from './OrderTraker';
import { Grid } from '@mui/material';
import { color } from '../Product/FilterData';

const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20'>
      <div >
        <h1 className='text-lg font-semibold  py-7'> Deliverd Here</h1>
         <AddressCard/>
      </div>
      <div className='py-20'>
        <OrderTraker activeStep={3}/>
      </div>
       <Grid className="space-y-5" container>
       {[1,1,1,1,1].map((item)=>
      <Grid items container className="shadow-xl rounded-md p-5 border" sx={{ justifyContent:"space-between",alignItems:"center"}}>
        <Grid item xs={6}>
          <div className='flex space-x-4 lg:space-x-10'>
          <img className="W-[5rem] h-[5rem] object-cover object-top" src="https://th.bing.com/th/id/OIP.CZgltXbSlB4NA6ad3qFInwHaHa?rs=1&pid=ImgDetMain" alt="" />
          <div className="">
            <p >Women Cream denim jumpsuit </p>
            <p className="space-x-5"><span>Color:white</span><span>Size : M</span></p>
            <p>₹1,799</p>
            
            </div>
          </div>
        </Grid>
        {/* <Grid item>
          <Box sx={{color:"deepPurple[500]"}}></Box>
        </Grid> */}
      </Grid>
    
      )}
     </Grid>
    </div>
  );
}

export default OrderDetail;
