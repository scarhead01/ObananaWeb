import React, { useEffect, useState } from 'react';
import VendorList from './VendorList';
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

  return (
    <VendorCon>
      <div className="vendor-list">
        {vendors.map(vendor => (
          <Link to={`/vendor/${vendor._id}`} key={vendor._id} className="vendor-card">
            <div className="image-box">
              <img src={ baseUrl + vendor.file_path_image} alt={vendor.user_login} className="vendor-image" />
            </div>
            <div className="vendor-details">
              <div className="vendor-name" >{vendor.user_login}</div>
            </div>
          </Link>
        ))}
      </div>
    </VendorCon>
  );
};

const VendorCon = styled.div`
  .vendor-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Added gap between vendor cards */
  }

  .vendor-card {
     text-decoration: none;
  color: inherit;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .image-box {
  width: 100%;
  height: 200px; /* Set a fixed height for the image box */
  background-color: #ffffff; /* Choose a suitable background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
  .vendor-image {
    width: 100%;
    height: 200px; /* Set a fixed height for the image */
    border-radius: 4px;
    object-fit: contain; /* Ensure images maintain aspect ratio */
  }

  .vendor-details {
    margin-top: 10px;
    
  }

  .vendor-name {
    font-size: 1em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .vendor-price {
    font-size: 1em;
    color: #333;
  }
`
export default VendorComponent;
