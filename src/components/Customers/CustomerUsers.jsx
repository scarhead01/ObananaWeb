
const BASE_URL = 'http://143.42.66.33:8000/api/v1/customers';

export const fetchCustomerData = async (customerId) => {
  const url = `${BASE_URL}/${customerId}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it in your components
  }
};