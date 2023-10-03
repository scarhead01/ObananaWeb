import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductList from '../../components/Products/ProductList';
import VendorList from '../../components/Vendors/VendorList';
import Rating from '../../components/buttons/Rating';
import Header from '../../components/Header';
import ChatNowButton from '../../components/buttons/ChatNowButton';
import ContactSupplier from '../../components/buttons/ContactSupplier';
import Compare from '../../components/buttons/Compare';
import { styled } from 'styled-components';

const SearchResult = () => {
  const [currentTab, setCurrentTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    ProductList()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));

    VendorList()
      .then(data => setVendors(data))
      .catch(error => console.error('Error fetching vendors:', error));
  }, []);

  const baseUrl = "http://143.42.66.33:8000/images/";

  return (
    <SearchCon>
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

<div className="tabs">
            <button
              className={currentTab === 'products' ? 'active-tab' : ''}
              onClick={() => setCurrentTab('products')}
            >
              Products
            </button>
            <button
              className={currentTab === 'vendors' ? 'active-tab' : ''}
              onClick={() => setCurrentTab('vendors')}
            >
              Vendors
            </button>
          </div>
      </div>
      <div className="main-body">
         
              {currentTab === 'products' && <h1>More Products</h1>}
              {currentTab === 'vendors' && <h1>More Vendors</h1>}
              <div className="product-grid">
                {currentTab === 'products' && products.map(product => (
                  <Link to={`/product/${product._id}`} key={product._id} className="product-card">
                  <div className="product-content">
      <div className="product-image">
      <img src={baseUrl + product.file_path_image} alt={product.product_name}/>
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        {/* <p className="product-price">${product.price.toFixed(2)}</p> */}
        <p>Minimum Order: {product.minOrder}</p>
        <div className="vendor-reputation">
              <Rating rating={product.reputation} />
              <span>Years Active: {product.yearsActive} </span>
              <span className="total-rating">
                {/* {product.reputation.toFixed(1)}/5.0 ({product.totalRating} reviews) */}
              </span>
          </div>
          <div className="buttons">
            <div className='button1'> 
              <ChatNowButton/>
            </div>
            <div className='button2'> 
              <ContactSupplier/>
            </div>
            <Compare productId={product.id} /> {/* Pass the product id as a prop */}
          </div>
      </div>
      
    </div>
                  </Link>
                ))}
                {currentTab === 'vendors' && vendors.map(vendor => (
                      <Link to={`/vendor/${vendor._id}`}key={vendor._id} className="product-card">
                 
                  <div className="product-content">
      <div className="product-image">
      <img src={baseUrl + vendor.file_path_image} alt={vendor.product_name}/>
      </div>
      <div className="product-details">
        <h3>{vendor.user_login}</h3>
        {/* <p className="product-price">${product.price.toFixed(2)}</p> */}
        {/* <p>Minimum Order: {product.minOrder}</p> */}
          <div className="buttons">
            <div className='button1'> 
              <ChatNowButton/>
            </div>
            <div className='button2'> 
              <ContactSupplier/>
            </div>
          </div>
      </div>
      
    </div>
    </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchCon>
  );
}

const SearchCon = styled.div`
 display: flex;
  flex-direction: column;
  height: 100vh;

  a {
  color: #333; /* Change link color to your preference */
  text-decoration: none; /* Remove underline */
}

.more-products {
  display: flex;
  justify-content: space-between;
}

.left-filters {
  width: 15%; /* Adjust the width as needed */
  border: 10px;
  padding: 20px;
}

.left-filters {
  width: 25%; /* Adjust the width as needed */
  border: 10px;
  padding: 20px;
  box-sizing: border-box; /* Include padding and border in the width */
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
  width: 75%; /* Adjust the width as needed */
  padding: 10px;
  box-sizing: border-box; /* Include padding and border in the width */
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
  flex: 0 0 30%;
  margin-right: 20px;
  max-width: 300px; /* Set a fixed width for the image container */
  height: 200px; /* Set a fixed height for the image container */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
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

.vendor-reputation{
  display: flex;
  align-items: center;
   span {
    margin: 0 5px; 
  }
}
.buttons {
  display: flex;
  align-items: center;
 

  .button1,
.button2 {
  margin-right: 10px; /* Add some right margin to create space between buttons */
}

  .compare-checkbox {
    display: flex;
    align-items: center;
  }

  .compare-checkbox input[type="checkbox"] {
    margin-right: 5px;
  }

  .compare-checkbox label {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .more-products {
  }

  .left-filters,
  .main-body {
    width: 100%;
  }
}
`;

export default SearchResult;
