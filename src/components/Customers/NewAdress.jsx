import React, { useState } from 'react';

const NewAddressFormPopup = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Call the onSave function with the form data.
    onClose(); // Close the modal.
  };

  return (
    <div>
      <h2>Add New Address</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </label>
        <label>
          Zip Code:
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Address</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default NewAddressFormPopup;
