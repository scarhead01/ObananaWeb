import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { styled } from 'styled-components';
import Header from '../../components/Header';


const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, incrementQuantity, decrementQuantity, removeItem } = useCart();
  const [editedQuantities, setEditedQuantities] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null); // Added error message state

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleEditQuantity = (itemId, newQuantity) => {
    setEditedQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity
    }));
  };

  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(item => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
// New Edit
  const handleCheckoutClick = () => {
    if (selectedItems.length === 0) {
      // Display an error message or handle this case as needed
      setErrorMessage("Please select at least one item to proceed to checkout.");
      return;
    }
  
    const selectedItemsForCheckout = cartItems.filter(item => selectedItems.includes(item._id));
  
    // Check if any selected item has a quantity lower than minOrder
    const invalidItems = selectedItemsForCheckout.filter(item => item.quantity < item.minOrder);
  
    if (invalidItems.length > 0) {
      // Display an error message
      setErrorMessage("Quantity must be equal or greater than the minOrder for selected items.");
      return;
    }
    localStorage.setItem('selectedItemsForCheckout', JSON.stringify(selectedItemsForCheckout));
  
    // Proceed to checkout
    navigate('/checkout', { state: { selectedItems: selectedItemsForCheckout } });
  };

  // const baseUrl = "http://143.42.66.33:8000/images/";

  return (
    <Con>
      {/* <Header className="header" /> */}
      <div className="main">
        <div className="app-container">
          <div className='CartContainer'>
            <div className='CartHeader'>
              <h1>Your Cart</h1>
            </div>
            <div className='CartItems'>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul>
                  {cartItems.map(item => (
                    <div key={item._id} className="CartItem">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item._id)}
                          onChange={() => handleCheckboxChange(item._id)}
                        />
                      <div className="CartItemImage">
                        <img src={item.product_image} alt={item.product_name} style={{ maxWidth: '100px' }} />
                      </div>
                      <div className="CartItemInfo">
                      
                        <div className='CartItemName'>{item.product_name}</div>
                        <div className="product-details">
                          <div className="product-detail">
                            <div className='CartItemPrice'>${item.regular_price}</div>
                          </div>
                          <div className="product-detail">
                            <div className='CartItemQuantity'>
                              <button onClick={() => {
                                const newQuantity = Math.max(1, editedQuantities[item._id] - 1);
                                handleEditQuantity(item._id, newQuantity);
                                decrementQuantity(item._id);
                              }}>-</button>
                             <input
                              type="number"
                              value={editedQuantities[item._id] || item.quantity}
                              onChange={(e) => {
                                const newQuantity = parseInt(e.target.value) || 1;
                                handleEditQuantity(item._id, newQuantity);

                                // Update the local state (editedQuantities)
                                setEditedQuantities(prevQuantities => ({
                                  ...prevQuantities,
                                  [item._id]: newQuantity
                                }));
                              }}
                            />

                              <button onClick={() => {
                                const newQuantity = (editedQuantities[item._id] || item.quantity) + 1;
                                handleEditQuantity(item._id, newQuantity);
                                incrementQuantity(item._id);
                              }}>+</button>
                            </div>
                          </div>
                          <div className="product-detail">
                            <div className="item-total">
                              <p>Total: ${(item.regular_price * (editedQuantities[item._id] || item.quantity))}</p>
                            </div>
                          </div>
                          <div className="DeleteButtonContainer">
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => handleRemoveItem(item._id)}
                              style={{ cursor: 'pointer', color: '#ff0000' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="summary">
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message */}
            <div className="cart-summary">
              <h3>Total: ${cartItems.reduce((total, item) => {
                if (selectedItems.includes(item._id)) {
                  return total + (item.regular_price * (editedQuantities[item._id] || item.quantity));
                }
                return total;
              }, 0).toFixed(2)}</h3>
            </div>
            <button className="checkout-button" onClick={handleCheckoutClick}>Checkout</button>
          </div>
        </div>
      </div>
    </Con>
  );
};


const Con = styled.div`
  display: flex;
  flex-direction: column;
 height: 100%;

  .CartContainer {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    margin-top: 20px;
  }

  .CartHeader {
    text-align: center;
    margin-bottom: 20px;
  }

  .CartItems {
    list-style: none;
    padding: 0;

    .CartItem {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      min-height: 100px;

      .CartItemName {
        font-weight: bold;
      }

      .CartItemPrice {
        font-weight: bold;
      }
    }

    .product-details {
      display: flex;
      align-items: center;
    }

    .product-detail {
      width: 200px;
      margin-right: 10px; 
      .CartItemQuantity {
      display: flex;
      align-items: center;

      button {
        width: 30px; 
      }

      input {
        width: 50px; 
      }
    }
    }
    
      
  }
  .DeleteButtonContainer {
    margin-left: auto; 
  }
`;

export default CartPage;
