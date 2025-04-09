import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { Trending } from '../../Data/Trending';


const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='space-y-20 py-10 flex-col  justify-center px-3 '>
        
        <HomeSectionCarousel  info={Trending} sName1={"NEW ARRIVAL"} sName2={"BEST SELLER"} sName3={"TRENDING!!"}/>
        <HomeSectionCarousel sName1={"NEW ARRIVAL"} sName2={"BEST SELLER"} sName3={''} />
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default HomePage;
