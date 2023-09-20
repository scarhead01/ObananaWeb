// ContactSupplierButton.js

import React from 'react';

const ContactSupplierButton = () => {
  const handleContactSupplier = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Contact Supplier button clicked');
    // Add your contact supplier logic here
  };

  return (
    <div className='button1'>
      <button onClick={handleContactSupplier}>Contact Supplier</button>
    </div>
  );
}

export default ContactSupplierButton;
