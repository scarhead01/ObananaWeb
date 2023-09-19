import React from 'react';
import ProductList from './ProductList';
import { styled } from 'styled-components';


const Products = () => {
  

  return (
    <ProductCon>
      <div className="product-list">
        {ProductList.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
            </div>
          </div>
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
}

.product-price {
  font-size: 1em;
  color: #333;
}
`
export default Products;
