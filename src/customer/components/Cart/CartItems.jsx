import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { IconButton ,Button} from "@mui/material";
import React from "react";


const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div
          className=" flex  w-[5rem] h-[5rem] lg:w-[9rem ]
      lg:h-[9rem] "
        >
          <img
            className="w-full h-full object-cover object-top"
            src="https://th.bing.com/th?id=OPAC.BYjYFi6xUxGN9w474C474&w=220&h=210&c=17&o=5&dpr=1.3&pid=21.1"
            alt=""
            srcset=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold"> Women straight Jeans</p>
          <p className="opacity-70">Size:L , Cream</p>
          <div className="flex space-x-5 items-center  text-gray-900 pt-5">
            <p className="font-semibold ">₹999</p>
            <p className="opacity-50 line-through">₹1199</p>
            <p className="font-semibold text-red-600">17% off</p>
          </div>
        </div>
        </div>
        <div className="lg:flex items-center lg;space-x-10 pt-6">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutline/>
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton>
              <AddCircleOutline/>
            </IconButton>
            
         
        </div>
        <div>
          <Button sx={{colcor:"white"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;