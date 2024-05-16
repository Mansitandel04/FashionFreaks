import React from 'react';
import { Avatar, Grid ,Box ,Rating} from '@mui/material';

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3} className='sm:text-sm '>
        <Grid item xs={1}>
          <Box>
            <Avatar className='text-white sm:w-[20px]'  sx={{width:50 ,height:50,bgcolor:"9155fd"}} >R</Avatar>
          </Box>
        </Grid>

        <Grid items xs={9}>
          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg'> Ram</p>
              <p className='opacity-70'>April 5 ,2024</p>
            </div>
          </div>

          <Rating value={4} name='half-rating' readOnly></Rating>
          <p >Llove this product.vwry good quality </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductReviewCard;
