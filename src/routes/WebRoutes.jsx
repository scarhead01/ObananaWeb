
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/mainPages/home';
import Cart from '../pages/mainPages/CartPage'
import MoreProducts from '../pages/mainPages/MoreProducts'
import ProductPage from '../pages/mainPages/ProductPage'
import CheckoutPage from '../pages/subPages/CheckoutPage';
import PurchasesPage from '../pages/subPages/PurchasesPage';

import Products from '../components/Products/Products'
import VendorPage from '../pages/mainPages/VendorPage';
import SearchResult from '../pages/subPages/SearchResult';


const WebRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/MoreProducts" element={<MoreProducts />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/purchases" element={<PurchasesPage />} />

      <Route path="/vendor/:id" element={<VendorPage />} />

      <Route path="/Search-Results" element={<SearchResult />} />
      {/* <Route path="/products" element={<Products />} /> */}
    </Routes>
  </Router>
  )
}

export default WebRoutes