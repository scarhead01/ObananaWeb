

// const ProductList = [
//     { 
//         id: 1, 
//         storeid: 'The Paint Shop', 
//         image: 'https://i0.wp.com/canit.co.za/wp-content/uploads/2018/05/5100888_xxl.jpg?fit=5616%2C3744&ssl=1',
//         name: 'Artecho art supply solid metallic watercolor cake set 72 colors watercolor paint with brush', 
//         price: 10.99,
//         minOrder: '10 pieces',
//         reputation: 4.5,
//         yearsActive:5,
//         totalRating:56,
//     },
//     { 
//         id: 2, 
//         storeid: 'Techno Us', 
//         image: 'https://s.alicdn.com/@sc04/kf/Hf061d46eeb824ea39aea47c26948fdf5P.jpg_960x960.jpg',
//         name: 'i7 Core 11th 12th Gen Laptop Computer 16GB RAM 11 10th Generation 1TB SSD 8GB 15.6 inch Intel Notebook Laptop i7', 
//         price: 7000,
//         minOrder: '1 pieces',
//         reputation: 5,
//         yearsActive:2,
//         totalRating:10,
//     },
//     // Add more products as needed
//   ];
// export default ProductList

// Define an empty array to store the products
// const ProductList = [];

// const myHeaders = new Headers();

// const requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("http://143.42.66.33:8000/api/v1/products", requestOptions)
//   .then(response => response.json()) // Assuming the response is in JSON format
//   .then(data => {
//     // Assuming the data structure from the API matches your ProductList format
//     data.forEach(product => {
//       ProductList.push({
//         id: product._id,
//         productName: product.product_name,
//         productId: product.product_id,
//         vendorId: product.vendor_id,
//         postDate: product.post_date,
//         stock: product.stock,
//         regularPrice: product.regular_price,
//         salePrice: product.sale_price,
//         weight: product.weight,
//         length: product.length,
//         width: product.width,
//         height: product.height,
//         stockStatus: product.stock_status,
//         lowStockAmount: product.low_stock_amount,
//         manageStock: product.manage_stock,
//         salePriceDateFrom: product.sale_price_date_from,
//         salePriceDateTo: product.sale_price_date_to,
//         productType: product.product_type,
//         productCategory: product.product_category,
//         productTag: product.product_tag,
//         shippingClass: product.shipping_class,
//         filePathImage: product.file_path_image,
//         variants: product.variants,
//         v: product.__v
//       });
//     });
//   })
//   .catch(error => console.error('Error fetching products:', error));

// export default ProductList;



// import React, { useState, useEffect } from 'react';
// import Products from "./Products";


// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://143.42.66.33:8000/api/v1/products');
//         setProducts(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product._id}>
//             <h2>{product.product_name}</h2>
//             <p>Product ID: {product.product_id}</p>
//             <p>Stock: {product.stock}</p>
//             <p>Price: {product.regular_price}</p>
//             <p>Product Status: {product.stock_status}</p>
//             <p>Category: {product.product_category}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Products from './Products';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://143.42.66.33:8000/api/v1/products');
//         const formattedProducts = response.data.map(item => ({
//           id: item.product_id,
//           name: item.product_name,
//           price: item.regular_price,
//         }));
//         setProducts(formattedProducts);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Products products={products} />
//     </div>
//   );
// };

// export default ProductList;



import axios from 'axios';

const apiUrl = 'https://api.obanana.shop/api/v1/products';
// const apiUrl = 'http://143.42.66.33:8000/api/v1/products';

const staticMinOrder = 5;


const ProductList = async () => {
  try {
    const response = await axios.get(apiUrl);
    const products = response.data.map(product => ({
      ...product,
      minOrder: staticMinOrder,
    }));
    return products;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default ProductList;


