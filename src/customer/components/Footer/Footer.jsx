import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-alice-carousel';

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10'
        container
        sx={{ bgcolor: 'black', color: 'white', py: 3 }} >

        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Company</Typography>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> About</Button>
            </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Blog</Button>
          </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Press</Button>
          </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Jobs</Button>
          </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Partners</Button>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Solutions</Typography>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Marketing</Button>
            </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Analytics</Button>
          </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'>Commerce</Button>
          </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Insights</Button>
          </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Support</Button>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Documantation</Typography>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Guides</Button>
            </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Api Status</Button>
          </div>
            
        </Grid>



        <Grid item xs={12} sm={6} md={3}>
          <Typography className='pb-5' variant='h6'> Legal</Typography>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Claim</Button>
            </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Privacy</Button>
          </div>
          <div>
            <Button className='pb-5' gutterBottom variant='h6'> Terms</Button>
          </div>
        </Grid>



        <Grid  >
         <Grid className='pt-20 lg:px-[550px]  sm:px-[300px] 'alignItems='center' item xs={12}>
         <Typography variant='body2' component='p' align='center' > &copy; 2024 My Company . All rights Reserved.</Typography>
         <Typography variant='body2' component='p' align='center'> Made with Love By me.</Typography>
         <Typography variant='body2' component='p' align='center'>icons Made by
         <Link href='https://www.freepik.com' color='inherit' underline='always'>Freepik
         </Link>
         from
         <Link href='https://www.flaticon.com' color='inherit' underline='always'>www.flaticon.com
         </Link>
         </Typography>
         </Grid>
        </Grid>


      </Grid>
    </div>
  );
}

export default Footer;
