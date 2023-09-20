import React from 'react';
import { useCart } from '../../context/CartContext'; 
import styled from 'styled-components';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <CartContainer>
      <div className='CartHeader'>
        <h1>Your Cart</h1>
      </div>
      <div className='CartItems'>
        {cart.length === 0 ? (
          <div className='EmptyCartMessage'>Your cart is empty.</div>
        ) : (
          <ul>
            {cart.map((item) => (
             <div className='CartItem' key={item.id}>
               <div className='CartItemImage'>
               <img src={item.image} alt={item.name} style={{ maxWidth: '100px' }} />
             </div>
             <div className='CartItemName'>{item.name}</div>
             <div className='CartItemPrice'>${item.price.toFixed(2)}</div>
           </div>
            ))}
          </ul>
        )}
      </div>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-top: 20px;

  .CartHeader{
    text-align: center;
  margin-bottom: 20px;
  }
  .CartItems{
    list-style: none;
    padding: 0;
    .EmptyCardMessage{
      text-align: center;
  font-style: italic;
    }
  .CartItem {
    display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;

  .CartItemName {
    font-weight: bold;
  }
  .CartItemPrice {
    font-weight: bold;
  }
  }
  }
`




export default CartPage;
