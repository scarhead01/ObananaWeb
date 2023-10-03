import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    return savedCartItems || [];
  });

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    if (quantity < product.minOrder) {
      console.log("Quantity is less than minOrder. Cannot add to cart.");
      return;
    }

    const existingItem = cartItems.find(item => item._id === product._id);

    if (existingItem) {
      setCartItems(cartItems.map(item => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      }));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }

    // new add

    setSelectedItems(prevSelectedItems => [...prevSelectedItems, product._id]);
  };

  const removeFromCart = (productId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item._id !== productId));
  
    setSelectedItems(prevSelectedItems => prevSelectedItems.filter(id => id !== productId));
  };
  
  

  const incrementQuantity = (productId) => {
    setCartItems(cartItems.map(item => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  const decrementQuantity = (productId) => {
    setCartItems(cartItems.map(item => {
      if (item._id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const removeItem = (productId) => {
    setCartItems(cartItems.filter(item => item._id !== productId));

    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.filter(id => id !== productId)
    );
  };

  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        selectedItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
