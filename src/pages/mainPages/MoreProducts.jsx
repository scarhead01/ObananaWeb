import React from 'react';
import productlist from '../../components/Products/ProductList';
import { styled } from 'styled-components';
import Header from '../../components/header';

const MoreProducts = () => {

  return (
    <ProdCon>
         <Header className="header" />
         <div className="main">
        <div className="app-container">
     <div className="more-products">
      <div className="left-filters">
        <h2>Filters</h2>
        <div className="filter-option">
          <label>Category:</label>
          <select>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>
        <div className="filter-option">
  <div className="category">
    <label>Category:</label>
    <div className="checkbox-group">
      <div className="checkbox-item">
        <input type="checkbox" value="category1" />
        <span>Category 1</span>
      </div>
      <div className="checkbox-item">
        <input type="checkbox" value="category2" />
        <span>Category 2</span>
      </div>
      <div className="checkbox-item">
        <input type="checkbox" value="category3" />
        <span>Category 3</span>
      </div>
      <div className="checkbox-item">
        <input type="checkbox" value="category4" />
        <span>Category 4</span>
      </div>
      <div className="checkbox-item">
        <input type="checkbox" value="category5" />
        <span>Category 5</span>
      </div>
    </div>
  </div>
</div>

<div className="filter-option">
  <label>Price Range:</label>
  <div className="price-inputs">
    <input type="number" placeholder="Min" min="0" />
    <span>-</span>
    <input type="number" placeholder="Max" min="0" />
  </div>
</div>

       
      </div>
      <div className="main-body">
        <h1>More Products</h1>
        <div className="product-grid">
        {productlist.map(product => (
  <div key={product.id} className="product-card">
    <div className="product-content">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p>Minimum Order: {product.minOrder}</p>
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
    </div>
    </div>
  </ProdCon>
);
}
const ProdCon = styled.div`
   display: flex;
  flex-direction: column;
  height: 100vh;

   
.more-products {
  display: flex;
  justify-content: space-between;
}

.left-filters {
  width: 15%; /* Adjust the width as needed */
  border: 10px;
  padding: 20px;
}

.left-filters h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.filter-option {
  margin-bottom: 15px;
}

.filter-option label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.filter-option select {
  width: 100%;
  padding: 8px;
}

.filter-option input[type="range"] {
  width: 100%;
}
.checkbox-item {
  margin-bottom: 5px; /* Add some space between items */
}

.checkbox-item input {
  margin-right: 5px; /* Add some space between checkbox and label */
}


.price-inputs {
    display: flex;
  max-width: 150px; 
}

.price-inputs input {
    width: 70px; /* Set the width of each input element */
  margin-right: 5px;
}

.main-body {
  width: 85%; /* Adjust the width as needed */
  padding: 20px;
}


.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  display: flex; /* Make the product card a flex container */
  margin-bottom: 20px; /* Add some space between cards */
}

.product-content {
  display: flex; /* Make the content area a flex container */
  align-items: center; /* Align content vertically */
  width: 100%;
}

.product-image {
  flex: 0 0 30%; /* Set a fixed width for the image */
  margin-right: 20px; /* Add some space between image and details */
}

.product-image img {
  max-width: 100%;
  height: auto;
}

.product-details {
  flex: 1; /* Let the details take remaining space */
}

.product-details h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-price {
  font-weight: bold;
}

.product-details p {
  margin: 5px 0;
}



@media (max-width: 768px) {
  .more-products {
  }

  .left-filters,
  .main-body {
    width: 100%;
  }
}

 
`
export default MoreProducts;
