import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/mainPages/Home';
import Cart from '../pages/mainPages/CartPage';
import MoreProducts from '../pages/mainPages/MoreProducts';
import ProductPage from '../pages/mainPages/ProductPage';
import CheckoutPage from '../pages/subPages/CheckoutPage';
import PurchasesPage from '../pages/subPages/PurchasesPage';
import VendorPage from '../pages/mainPages/VendorPage';
import SearchResult from '../pages/subPages/SearchResult';
import AccountPage from '../pages/mainPages/AccountPage';
import Header from '../components/Header';
import styled from 'styled-components';
import ProductListPage from '../components/Products/ProductListPage';
import Login from '../auth/Login';
import Register from '../auth/Register';
import NewAddressFormPopup from '../components/Customers/NewAdress';
import { get_all_products } from "../services/API/controllers/ProductController";
import { get_all_vendors } from "../services/API/controllers/VendorController";

const WebRoutes = () => {
  const [product, setproduct] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [prodIsLoading, setprodIsLoading] = useState(true); // Add a loading state
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  useEffect(() => {
    // Fetch vendors and update the state
     get_all_products()
     .then((result) => {
      //  console.log("result" + result);

       if (result.error) {
         setError(result.error);
       } else {
         setproduct(shuffleArray(result.data));
       }
     })
     .catch((error) => {
       setError(error.message);
     })
     .finally(() => {
       setprodIsLoading(false); // Set loading to false when done loading
     });
  }, []);

  useEffect(() => {
    // Fetch vendors and update the state
     get_all_vendors()
     .then((result) => {
       if (result.error) {
         setError(result.error);
       } else {
        setVendors(shuffleArray(result.data));
       }
     })
     .catch((error) => {
       setError(error.message);
     })
     .finally(() => {
      setIsLoading(false); // Set loading to false when done loading
    });

  }, []);

  return (
    <Container>
      <Router>
        <div className="header">
        <Header />
        </div>
       
        <div className="mains">
          
          <Routes>
            <Route path="/" element={<Home product={product} vendors={vendors} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/MoreProducts" element={<MoreProducts />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/purchases" element={<PurchasesPage />} />
            <Route path="/vendor/:id" element={<VendorPage />} />
            <Route path="/Search-Results" element={<SearchResult />} />
            <Route path="/MyAccount" element={<AccountPage />} />
            <Route path="/productlistpage/" element={<ProductListPage product={product} />} />

            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/new-address" element={<NewAddressFormPopup />} />

            
          </Routes>
        </div>
      </Router>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .mains {
    overflow-x: hidden;
    flex-grow: 1;
    position: relative;
    overflow-y: auto;
  }

`;

export default WebRoutes;
