import React from 'react';
// import AddressSelection from '../Selection/AddressSelection';
import Addresses from '../Customers/Address';
import styled from 'styled-components';

const AddressPopup = ({ onClose, onSelect, selectedAddress }) => {
  const customerId = '651444143bf84bb9914a6964';

  const handleAddressSelect = (address) => {
    onSelect(address); // Call the onSelect function with the selected address.
    onClose(); // Close the modal if needed.
  };

  
  return (
    <Con>
      <div className="AddressSelectionPopup">
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
         <Addresses 
  customerId={customerId} 
  onSelect={handleAddressSelect} // Make sure onSelect is defined and working in the Address component.
  selectedAddress={selectedAddress} 
/>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
    .AddressSelectionPopup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.popup-content {
  text-align: center;
}

.close-button {
  background: #ccc;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
}

`
export default AddressPopup;
