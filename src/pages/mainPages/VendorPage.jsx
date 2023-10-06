import React, { useState, useEffect } from 'react';
import VendorList from '../../components/Vendors/VendorList'
import ProductList from '../../components/Products/ProductList';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';

const VendorPage = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    VendorList()
      .then(data => {
        console.log('Vendor List Data:', data);
        const selectedVendor = data.find(p => p._id === id);
        setVendor(selectedVendor);
        console.log('Selected Vendor:', selectedVendor);
      })
      .catch(error => console.error('Error:', error));

      ProductList()
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  const vendorProducts = products.filter(product => product.vendor_id === id);

  const baseUrl = "http://143.42.66.33:8000/images/";

  if (!vendor || !vendor.date_registered) {
    return null;
  }

  const rawDate = vendor.date_registered;
  const formattedDate = new Date(rawDate);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDateString = formattedDate.toLocaleDateString('en-US', options);
   return (
    <VendorPageCon>
      {/* <Header className="header" /> */}
      <div className="main">
        <div className="app-container">
          {vendor && (
            <div className="vendor-page-container">
              <div className="vendor-details">
                <div className="vendor-image-container">
                  <img src={baseUrl + vendor.file_path_image} alt={vendor.user_login} className="vendor-image" />
                </div>
                <div className="vendor-info">
                  <h2 className="vendor-name">{vendor.user_login}</h2>
                  <div className="vendor-description">{vendor.description}</div>
                  <div className="vendor-datejoined">Joined: {formattedDateString}</div>
                </div>
              </div>
            </div>
          )}
          <div className="vendor-page-container">
            {vendorProducts.length > 0 && (
              <div className="shop-products">
                {vendorProducts.map(product => (
                  <Link to={`/product/${product._id}`} key={product._id} className="product-card">
                     <div className="image-box">
              <img src={baseUrl + product.file_path_image} alt={product.product_name} className="product-image" />
            </div>
            <div className="product-details">
              <div className="product-name">{product.product_name}</div>
              <div className="product-price">₱{product.regular_price}</div>
            </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </VendorPageCon>
  );
};

const VendorPageCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  
  .vendor-page-container {
    display: flex;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

    .vendor-details {
    align-items: center; 
    display:flex ;

    .vendor-image-container {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .vendor-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  }
  .vendor-info {
    margin-left: 20px;
    .vendor-name {
    font-size: 1.8em; 
    font-weight: bold;
    margin-bottom: 10px;
  }

  .vendor-description {
    font-size: 1.2em; 
    margin-bottom: 10px;
  }

  .vendor-datejoined {
    font-size: 1.2em;
    color: #ffa726;
  }

  }
  }
  }

.shop-products{
  display: flex;
    flex-wrap: wrap;
    gap: 20px; 

    .product-card {
     text-decoration: none;
  color: inherit;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .image-box {
  width: 100%;
  height: 200px; 
  background-color: #ffffff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  .product-image {
    width: 100%;
    height: 200px;
    border-radius: 4px;
    object-fit: contain; 
  }
}
.product-details {
    margin-top: 10px;
    .product-name {
    font-size: 1em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product-price {
    font-size: 1em;
    color: #333;
  }

  }

  }
}
  
`;

export default VendorPage;