import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = mainCarouselData.map((item)=> <img  className='cursor-pointer' src={item.image} role='presentation' alt=''/>)
  return (
    <AliceCarousel
        autoPlay
        
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableButtonsControls
        items={items}
        
       
    />
  );
}

export default MainCarousel;
