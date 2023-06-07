import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import SliderCard from "./SliderCard/SliderCard";
import sliderImg1 from '../../../../assets/sliderImage1.png'
import sliderImg2 from '../../../../assets/sliderImage2.png'
import sliderImg3 from '../../../../assets/sliderImage3.png'
import sliderImg4 from '../../../../assets/sliderImage4.png'
import sliderImg5 from '../../../../assets/sliderImage5.png'

const Slider = () => {
  return (
    <div className="mb-20 -mt-24">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><SliderCard sliderImage={sliderImg1} /></SwiperSlide>
        <SwiperSlide><SliderCard sliderImage={sliderImg2}/></SwiperSlide>
        <SwiperSlide><SliderCard sliderImage={sliderImg3}/></SwiperSlide>
        <SwiperSlide><SliderCard sliderImage={sliderImg4}/></SwiperSlide>
        <SwiperSlide><SliderCard sliderImage={sliderImg5}/></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;
