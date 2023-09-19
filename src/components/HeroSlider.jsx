import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/hero/slide1.jpg';
import slide2 from '../assets/hero/slide2.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from 'styled-components';

const HeroSlider = () => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
      </SwiperSlide>
    </StyledSwiper>
  );
};

const StyledSwiper = styled(Swiper)`
position: relative;
z-index: 999;
  width: 100%;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%; /* Ensure the image doesn't exceed the slide dimensions */
      max-height: 100%;
    }
  }
`;

export default HeroSlider;
