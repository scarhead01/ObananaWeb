import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/mainPages/home';
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

const WebRoutes = () => {

  return (
    <Container>
      <Router>
        <div className="header">
        <Header />
        </div>
       
        <div className="mains">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/MoreProducts" element={<MoreProducts />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/purchases" element={<PurchasesPage />} />
            <Route path="/vendor/:id" element={<VendorPage />} />
            <Route path="/Search-Results" element={<SearchResult />} />
            <Route path="/MyAccount" element={<AccountPage />} />
            <Route path="/productlistpage/" element={<ProductListPage />} />
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
    flex-grow: 1;
    position: relative;
    overflow-y: auto;
  }

`;

export default WebRoutes;
