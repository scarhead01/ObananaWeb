import React, { useState } from 'react';

const AddressSelection = ({ onSelect, selectedAddress }) => {
  const addresses = [
    '123 Main Street',
    '456 Elm Avenue',
    '789 Oak Boulevard'
  ];

  return (
    <div className="AddressSelection">
      <h2>Select Address</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index} className={address === selectedAddress ? 'selected' : ''}>
            <label>
              <input
                type="radio"
                name="address"
                checked={address === selectedAddress}
                onChange={() => onSelect(address)}
              />
              {address}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressSelection;
