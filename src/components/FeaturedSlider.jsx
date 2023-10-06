import {Navigation, Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/featuredslider/f1.png'
import slide2 from '../assets/featuredslider/f2.jpg'
import slide3 from '../assets/featuredslider/f3.jfif'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from 'styled-components';

const FeaturedSlider = () => {
  return (
    <StyledSwiper
    // install Swiper modules
    modules={[Navigation, Pagination,  Autoplay]}
    spaceBetween={2}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
    <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
    <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
  </StyledSwiper>
  )
}

const StyledSwiper = styled(Swiper)`
  /* Add your custom styles here */
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    img {
   max-width: 70%;
   max-height:50%;
   border-radius: 20px;
   }
  }`
export default FeaturedSlider




//   img {
//     max-width: 100%;
//     max-height: 100%;
//   }
// `;
// export default HeroSlider