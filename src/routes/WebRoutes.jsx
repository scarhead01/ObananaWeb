
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/mainPages/home';
import Cart from '../pages/mainPages/CartPage'
import MoreProducts from '../pages/mainPages/MoreProducts'
// import Products from '../components/Products/Products'


const WebRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/MoreProducts" element={<MoreProducts />} />
   
    </Routes>
  </Router>
  )
}

export default WebRoutes