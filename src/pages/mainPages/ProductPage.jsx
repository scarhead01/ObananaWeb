import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ProductList from '../../components/Products/ProductList';
import Header from '../../components/Header';
import Rating from '../../components/buttons/Rating';
import { styled } from 'styled-components';

const ProductPage = () => {
  let { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate(); 

  const product = ProductList.find(product => product.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
    navigate('/cart'); // Redirect to CartPage using useNavigate
  };


  return (
    <Con>
      <Header className="header" />
      <div className="main">
        <div className="app-container">
          <div className="product-page-container">
            <div className="left-div">
              <div className="product-image-container">
                <img className="product-image" src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="middle-div">
              <div className="product-info">
                <div className="product-name-container">
                  <h2 className="product-name">{product.name}</h2>
                </div>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p className="product-min-order">Minimum Order: {product.minOrder}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                 {/* <Link to="/cart">Go to Cart</Link> */}
                <div className="vendor-reputation">
                  <Rating rating={product.reputation} />
                  <span className="total-rating">
                    {product.reputation.toFixed(1)}/5.0 ({product.totalRating} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="right-div">
              <div className="min-order-info">
                <span>The minimum order quantity is: {product.minOrder}</span>
              </div>
              <div className="button-container">
                <button className="inquiry-button">Send Inquiry</button>
                <button className="call-button">Call Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Con>
  );
}

const Con = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
 

  .product-page-container {
    display: flex;
    padding: 10px;
  }

  .left-div {
  background-color: #f4f4f4;
  display: flex;
}

.product-image-container {
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: flex;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  
}

.middle-div {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  .product-name-container {
    width: 500px;
    max-height: 60px;
  }

  .product-name {
    font-size: 20px;
    margin-bottom: 10px;
    word-break: break-word; /* Allow the text to break onto the next line */
  }
}

  .right-div {
    width: 200px; /* Set a fixed width */
  height: 100px; /* Set a fixed height */
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-left: 10px;
  border: 2px solid #000; /* Add border */

    .button-container {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }

    .inquiry-button,
    .call-button {
      margin-bottom: 5px;
    }
  }
`;

export default ProductPage;
