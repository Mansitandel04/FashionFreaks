import { AdjustOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';
 

const OrderCard = () => {
  return (
    <div className='p-5 shadow-lg hover:shadow-2xl'>
     <Grid container spacing={2} sx={{justifyContent:"space-between",marginTop:"20px"}}> 
     <Grid items xs={6}>
         <div  className='flex cursor-pointer'> 
          <img className="W-[5rem] h-[5rem] object-cover object-top" src="https://th.bing.com/th/id/OIP.CZgltXbSlB4NA6ad3qFInwHaHa?rs=1&pid=ImgDetMain" alt="" />
          <div className="ml-5 space-y-2">
            <p className="mb-2"> Women Cream denim jumpsuit</p>
            <p className='opacity-50 text-xs font-semibold'>Size : M</p>
            <p className='opacity-50 text-xs font-semibold'>Color: White</p>
          </div>
         </div>
     </Grid>

     <Grid item xs={2}>
      <p>₹1,799</p>
     </Grid>

     <Grid item xs={4}>
      {true && 
      <div>
        <p><AdjustOutlined sx={{width:"15px", height:"15px" }} className='text-green-600 mr-2 text-sm'/>
        <span>Deliverd on march  03</span>
        </p>
        <p className='text-xs'> 
          Your Item has been delivered</p>
        </div>}

        {false && <p><span>Expexted Delivery on march 03</span>
        </p>
}
     </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
