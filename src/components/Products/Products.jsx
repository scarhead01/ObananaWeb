
// import ProductList from './ProductList';
// import { styled } from 'styled-components';
// import { Link } from 'react-router-dom';


// const Products = () => {
//   const handleHover = (event) => {
//     const productName = event.target.innerText;
//     event.target.title = productName;
//   }

//   return (
//     <ProductCon>
//       <div className="product-list">
//         {ProductList.map(product => (
//          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <div className="product-details">
//             <div className="product-name" onMouseOver={handleHover}>{product.name}</div>
//               <div className="product-price">${product.price}</div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </ProductCon>
//   );
// };

// const ProductCon = styled.div`
//   .product-list {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 20px; /* Added gap between product cards */
//   }

//   .product-card {
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     padding: 10px;
//     width: 200px;
//     background-color: #fff;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   }

//   .product-image {
//     width: 100%;
//     height: 200px; /* Set a fixed height for the image */
//     border-radius: 4px;
//     object-fit: contain; /* Ensure images maintain aspect ratio */
//   }

//   .product-details {
//     margin-top: 10px;
//     text-align: center;
//   }

//   .product-name {
//     font-size: 1em;
//     font-weight: bold;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }

//   .product-price {
//     font-size: 1em;
//     color: #333;
//   }
// `;

// export default Products;






import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductList()
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleHover = (event) => {
    const productName = event.target.innerText;
    event.target.title = productName;
  };

  const baseUrl = "http://143.42.66.33:8000/images/";

  return (
    <ProductCon>
      <div className="product-list">
        {products.map(product => (
          <Link to={`/product/${product._id}`} key={product._id} className="product-card">
            <div className="image-box">
              <img src={baseUrl + product.file_path_image} alt={product.product_name} className="product-image" />
            </div>
            <div className="product-details">
              <div className="product-name" onMouseOver={handleHover}>{product.product_name}</div>
              <div className="product-price">₱{product.regular_price}</div>
            </div>
          </Link>
        ))}
      </div>
    </ProductCon>
  );
};
const ProductCon = styled.div`
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; 
  }

  .product-card {
     text-decoration: none;
  color: inherit;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .image-box {
  width: 100%;
  height: 200px; /* Set a fixed height for the image box */
  background-color: #ffffff; /* Choose a suitable background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
  .product-image {
    width: 100%;
    height: 200px; /* Set a fixed height for the image */
    border-radius: 4px;
    object-fit: contain; /* Ensure images maintain aspect ratio */
  }

  .product-details {
    margin-top: 10px;
    
  }

  .product-name {
    font-size: 1em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-price {
    font-size: 1em;
    color: #333;
  }
`;


export default Products;
