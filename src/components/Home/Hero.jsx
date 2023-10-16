import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import map from '../../assets/hero/map.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { styled } from 'styled-components';


const HeroSlider = () => {
  const cards = [
    { 
      text: 'Take factory live tours', 
      image: 'https://www.realmet.com/fileadmin/user_upload/Rectangle_22.jpg',
      link: '#', 
     },
     { 
      text: 'Get Samples', 
       image: 'https://cdn.shopify.com/s/files/1/0482/8810/4600/files/LoomcraftTextile-155575-Types-Upholstery-Fabrics-Blogbanner1.jpg?v=1646662297',
       link: '#', 
     },
     { 
      text: 'Connect with top-ranking manufacturers', 
       image: 'https://d1foxquyhvnoo7.cloudfront.net/media/django-summernote/2021-02-03/bridge_crane_in_warehouse.webp?v=30848486d8bec95e55798be4b10c59e5186abfaf',
       link: '#', 
},
    
  ];

  return (
    <StyledContainer>
      <div className="hero">
      <Swiper className="swiper"
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
        <SwiperSlide className='swiper-slide'>
          <img src="https://www.dcvelocity.com/ext/resources/images/articles/2020/202006/20200616conveyors.jpg?t=1592243337&width=1080" alt="" />
          <div className="banner">
          <h2>Obanana Business is the No. 1 B2B E-Commerce Platform in the Philippines!</h2>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.telgian.com/content/uploads/2022/01/Robot-purchased-1320x612.jpg" alt="" />
          <div className="banner">
          <h2>Obanana Business is the No. 1 B2B E-Commerce Platform in the Philippines!</h2>
        </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="lower">
      <div className="text">
        <h2>Direct To Manufacturers or Distributors</h2>
        </div>
        <div className="lower-content">
      <div className="left">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt="" />
            <div className="top-card-content">
              <p>{card.text}</p>
            </div>
            <div className="bottom-card-content">
              <a href={card.link}>Read</a>
            </div>
          </div>
        ))}
       
      </div>
      <div className="right">
        <div className="map">
          <img src={map} alt="" />
        </div>
      </div>
      </div>
    </div>

    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  


  .hero {
    .swiper {
      position: relative;
      z-index: 0;
      width: 100%;
      height: 50vh;
    }

    .swiper-slide {
      position: relative;
      text-align: center;
      font-size: 18px;
      background: #fff;
      border: 1px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;

      .banner {
        display: flex;
        justify-content: center;
        position: absolute;
        background-color: #27323857;
        left: 5%;
        width: 30vw;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px; /* Added padding for better visual appeal */
        
        h2 {
          margin: 0;
          text-align: left;
          color: white;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure the image covers the entire slide */
      }
    }
  }

  .lower {
    position: relative;
    padding: 10px;
  
  }

  .lower-content{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
  }

  .left {
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
  }


  .card {
  margin: 10px;
  text-align: center;
  border-radius: 8px;
  width: 350px;
  height: 200px;
  position: relative;
  overflow: hidden; /* Hide the overflow to contain shadows */
  
}
.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

.top-card-content {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0;
  height: 40px;
  background: linear-gradient(to bottom, rgba(36, 35, 35, 1) 0%, rgba(0, 0, 0, 0) 100%);
  p {
  margin: 10px 0;
  color: white;
}
}

.bottom-card-content {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  height: 40px;
  background: linear-gradient(to top, rgba(36, 35, 35, 1) 0%, rgba(0, 0, 0, 0) 100%);
 
  

  a {
  display: block;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  position: absolute;
  bottom: 0; /* Position at the bottom */
  left: 50%;
  transform: translateX(-50%); /* Center horizontally */
}
}

.right{
  flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    
  .map{

  img{
    width: 350px;
  }
}
}


`;

export default HeroSlider;
