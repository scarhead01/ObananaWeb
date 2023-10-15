import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import AddressPopup from '../../components/Modals/AddressPopup';
import { useCart } from '../../context/CartContext';

const CheckoutPage = () => {
  const { removeFromCart } = useCart();
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]); 
  const [selectedAddress, setSelectedAddress] = useState(
    addresses.length > 0 ? addresses[0] : 'Choose Address'
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddressSelect = (address) => {
    console.log("Selected Address:", address);
    setSelectedAddress(address);
    setIsPopupOpen(false);
  };

  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];

  
  const totalPrice = selectedItems.reduce((total, item) => {
    return total + item.regular_price * item.quantity;
  }, 0);

  // New Edit
  const handleCheckout = () => {
    console.log("Selected Items:", selectedItems);
    selectedItems.forEach(item => {
      removeFromCart(item._id);
    });
  
    // Retrieve existing items from localStorage
    const storedItemsForPurchases = JSON.parse(localStorage.getItem('selectedItemsForPurchases')) || [];
  
    // Append new items to existing ones
    const updatedItemsForPurchases = [...storedItemsForPurchases, ...selectedItems];
  
    // Save updated items to localStorage
    localStorage.setItem('selectedItemsForPurchases', JSON.stringify(updatedItemsForPurchases));
  
    navigate('/purchases');
  };
  
  // const baseUrl = "http://143.42.66.33:8000/images/";
  return (
    <CheckoutCon>
      {/* <Header className="header" /> */}
      <div className="main">
        <div className="app-container">
        <div className="address-box" onClick={() => setIsPopupOpen(true)}>{selectedAddress}</div>
          {isPopupOpen && (
  <AddressPopup
    addresses={addresses}
    onSelect={handleAddressSelect}
    selectedAddress={selectedAddress}
    onClose={() => setIsPopupOpen(false)}
  />
)}

          <div className="CheckoutContainer">
            <h1 className="CheckoutHeader">Checkout</h1>
            <ul className="ItemList">
              {selectedItems.map((item) => (
                <li className="Item" key={item._id}>
                  <img
                    className="ItemImage"
                    src={item.product_image}
                    alt={item.product_name}
                    style={{ maxWidth: '100px' }}
                  />
                  <div className="ItemInfo">
                    <p className="ItemName">{item.product_name}</p>
                    <p className="ItemQuantity">₱{item.regular_price} &nbsp;&nbsp; x{item.quantity}</p>
                    <p className="ItemTotal">
                      Total: ${(item.regular_price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="TotalPrice">Total: ${totalPrice.toFixed(2)}</p>
            <button className="CheckoutButton" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </CheckoutCon>
  );
};

const CheckoutCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .address-box {
    background-color: #fff;
    border: 2px solid #007bff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 1.2em;
    max-width: 400px;
    width: 100%;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .address-box:hover {
    background-color: #f5f5f5;
  }

  .app-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .CheckoutContainer {
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  .CheckoutHeader {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .ItemList {
    list-style: none;
    padding: 0;
  }

  .Item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .ItemImage {
    max-width: 100px;
    margin-right: 20px;
  }

  .ItemInfo {
    text-align: left;
  }

  .ItemName {
    font-weight: bold;
    margin: 0 0 10px;
  }

  .ItemQuantity {
    margin: 0 0 5px;
  }

  .ItemTotal {
    font-weight: bold;
    margin: 0;
  }

  .TotalPrice {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 20px;
  }

  .CheckoutButton {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

export default CheckoutPage;
