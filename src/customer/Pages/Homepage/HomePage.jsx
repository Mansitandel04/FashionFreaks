import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { Trending } from '../../Data/Trending';


const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-20 py-10 flex-col  justify-center px-3 '>
        {/* <div className="flex justify-center items-center mt-[-50px] lg:text-[25px]  sm:text-[15px] active:bg-black ">
          <button className=" mx-[12px]  text-black-900 font-semibold hover:text-white  px-3 border border-black hover:border-black rounded-[25px] lg:text-[25px]  sm:text-[15px] hover:shadow hover:shadow-3xl hover:bg-black hover:border-white active:bg-black">
            BEST SELLERS
          </button>
          <button className="  mx-[12px]  text-black-900 font-semibold hover:text-white  px-3 border border-black  hover:border-black rounded-[25px] hover:shadow hover:shadow-3xl hover:bg-black hover:border-white active:bg-black ">
            NEW ARRIVALS
          </button>
          <button className="  mx-[12px]  text-black-900 font-semibold hover:text-white  px-3 border border-black hover:border-black rounded-[25px]  hover:shadow hover:shadow-3xl hover:bg-black hover:border-white active:color-black">
            SALE
          </button>
        </div> */}
        
        <HomeSectionCarousel  info={Trending} sName1={"NEW ARRIVAL"} sName2={"BEST SELLER"} sName3={"TRENDING!!"}/>
        <HomeSectionCarousel sName1={"NEW ARRIVAL"} sName2={"BEST SELLER"} sName3={''} />
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default HomePage;
