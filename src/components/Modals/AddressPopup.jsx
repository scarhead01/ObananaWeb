import React from 'react';
import AddressSelection from '../Selection/AddressSelection';
import styled from 'styled-components';

const AddressPopup = ({ onClose, onSelect, selectedAddress }) => {
  return (
    <Con>
    <div className="AddressSelectionPopup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <AddressSelection onSelect={onSelect} selectedAddress={selectedAddress} />
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
