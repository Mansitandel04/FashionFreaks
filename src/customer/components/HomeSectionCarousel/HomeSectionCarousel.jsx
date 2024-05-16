import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Trending } from "../../Data/Trending";
// import { Trending } from "../../Data/Trending";



// import { Button } from "@mui/material";
// import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
const HomeSectionCarousel = ({data,sName1,sName2,sName3}) => {
const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 4 },
};
const items = Trending.slice(0,10).map((item) => (
  <HomeSectionCard product= {item}/>
));

  return (
    <div>
      
     <div className="flex justify-center items-center mt-[-20px] lg:text-[25px]  sm:text-[15px] active:bg-black ">
          <button className=" mx-[12px]  text-black-900 font-semibold hover:text-white  px-3 border border-black hover:border-black rounded-[25px] lg:text-[25px]  sm:text-[15px] hover:shadow hover:shadow-3xl hover:bg-black hover:border-white active:bg-black">
            {sName1}
          </button>
          <button className="  mx-[12px]  text-black-900 font-semibold hover:text-white  px-3 border border-black  hover:border-black rounded-[25px] hover:shadow hover:shadow-3xl hover:bg-black hover:border-white active:bg-black ">
           {sName2}
          </button>
          <button className="  mx-[12px]  text-black-900 font-semibold hover:text-white  px-3 border border-black hover:border-black rounded-[25px]  hover:shadow hover:shadow-3xl hover:bg-black hover:border-white active:color-black">
            {sName3}
          </button>
        </div>
      <div className=" px-4 lg:px-8">
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}/>
        {/* <Button variant="contained" className="" sx={{ transform:'translateX(50%)rotate(90deg)'}} color="white" aria-label="next" > < /></Button> */}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
