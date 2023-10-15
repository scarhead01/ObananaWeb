import axios from 'axios';
const apiUrl = 'https://api.obanana.shop/api/v1/vendors';

// const apiUrl = 'http://143.42.66.33:8000/api/v1/vendors';

const VendorsList = async () => {
  try {
    const response = await axios.get(apiUrl);
    const vendors = response.data;
    return vendors;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default VendorsList;