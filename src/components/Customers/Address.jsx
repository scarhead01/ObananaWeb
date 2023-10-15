import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Address = ({ customerId }) => {
  const [addressData, setAddressData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://143.42.66.33:8000/api/v1/customers/${customerId}`, {
        });
        setAddressData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [customerId]);

  console.log(addressData)
  return (
    <div>
      {addressData ? (
        <div>
          <h2>Address</h2>
          <p>Street: {addressData.billing_address_1}</p>
          <p>City: {addressData.billing_city}</p>
          <p>State: {addressData.billing_state}</p>
          <p>Zip: {addressData.billing_zip}</p>
          {/* Add more fields as per your API response structure */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Address;
