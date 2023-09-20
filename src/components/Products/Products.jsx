import React from 'react';
import ProductList from './ProductList';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';


const Products = () => {
  const handleHover = (event) => {
    const productName = event.target.innerText;
    event.target.title = productName;
  }

  return (
    <ProductCon>
      <div className="product-list">
        {ProductList.map(product => (
         <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
            <div className="product-name" onMouseOver={handleHover}>{product.name}</div>
              <div className="product-price">${product.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </ProductCon>
  );
};

const ProductCon =styled.div`
    .product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  border-radius: 4px;
}

.product-details {
  margin-top: 10px;
  text-align: center;
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
`
export default Products;
