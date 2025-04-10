import  React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation ,useNavigate } from 'react-router-dom';
import DeliveryAdd from './DeliveryAdd';
import OrderSummery from './OrderSummery';


const steps = ['Login' ,'Add Delivery addresss','Order Summery' ,'Payment'];

export default function Cheakout (){
  const [activeStep, setActiveStep] = React.useState(0);
  const location=useLocation();
  const querySearch =new URLSearchParams(location.search)
 
  const step =querySearch.get("step")

  const handleNext = () => {
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 


  return (

    <div className='p-5 lg:p-10'> 
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}
     >
        {steps.map((label, index) => {
          const stepProps = {step};
          const labelProps = {};
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
      
        </React.Fragment>
      ) : (
        <React.Fragment>
         
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
          </Box>

           <div  className='mt-10 m-5 gap-5'>
            {/* {step==2?<DeliveryAdd/>:<OrderSummery/>} */}
            <DeliveryAdd/>
            <OrderSummery/>
            
           </div>

        </React.Fragment>
      )}
    </Box>
    </div>
  );
}

