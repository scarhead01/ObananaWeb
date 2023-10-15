import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useEffect, useState } from 'react';
import VendorList from '../Vendors/VendorList';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const VendorComponent = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    VendorList()
      .then(data => setVendors(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const baseUrl = "http://143.42.66.33:8000/images/";

  const handleHover = (event) => {
    const productName = event.target.innerText;
    event.target.title = productName;
  };

  return (
    <VendorCon>
      <div className="wrapper">
      <div className="title"><h1>Featured Vendors</h1></div>
      <div className="vendor-list">
      <Swiper
  className="swiper"
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={2}
  slidesPerView={2} // Default slides per view
  navigation
  // pagination={{ clickable: true }}
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log('slide change')}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: {
      slidesPerView: 3 
    }
  }}
>
      {vendors.map(vendor => (
        <SwiperSlide key={vendor._id} className="swiper-slide">
          <Link to={`/vendor/${vendor._id}`} className="vendor-card">
              <img src={baseUrl + vendor.file_path_image} alt={vendor.user_login} />
              <div className="vendor-details">
              <div className="vendor-name"  onMouseOver={handleHover} >{vendor.user_login}</div>
              <div className="details"><span className="bold-text">Years in Industry:</span> {vendor.date_registered}</div>
              <div className="details"><span className="bold-text">Products:</span> Solar Panel, Battery, Controllers, Inverter, Other Supplies</div>
              <div className="details"><span className="bold-text">Services:</span> Installation, Maintenance, Delivery</div>
              <div className="button">
              <button>Chat Now</button>
              <button>Learn More</button>
            </div>
            </div>
            
          
           
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
        {/* {vendors.map(vendor => (
          <Link to={`/vendor/${vendor._id}`} key={vendor._id} className="vendor-card">
            <div className="image-box">
              <img src={ baseUrl + vendor.file_path_image} alt={vendor.user_login} className="vendor-image" />
            </div>
            <div className="vendor-details">
              <div className="vendor-name" >{vendor.user_login}</div>
            </div>
          </Link>
        ))} */}
      </div>
      </div>
    </VendorCon>
  );
};

const VendorCon = styled.div`
background-color: #4d2d18;
padding: 20px;

width:90%;
margin: auto;
.wrapper{
}
.title{
  h1{
    margin: 0 0 20px 0;
    font-size: 28px;
    color: white;
  }
}


  .swiper-slide {
    text-align: center;
    font-size: 18px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    .vendor-card{
    position: relative;
  width: 350px;
  height: 200px;
  min-width: 300px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before{
    content: "";
      position: absolute;
      top: 0;
      left: 0;
      
      background-color: rgba(68, 66, 66, 0.13); /* Adjust the alpha value for desired opacity */
  }
  .vendor-details {
    position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  box-sizing: border-box;
  .vendor-name {
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0;
  color: white;
}
.details {
  font-size: 14px;
  margin: 8px 0;
  color: white;
  .bold-text {
  font-weight: bold;
}
}
.button {
  display: flex;
 justify-content: space-between;
  text-align: center; /* Center align the buttons */
}

.button button {
 
  justify-content: space-between;
}
}
   }
}
`
export default VendorComponent;
