import Header from '../../components/Header'
import Hero from '../../components/Home/Hero'
import FeaturedSlider from '../../components/FeaturedSlider'
import Products from '../../components/Home/Products'
import Vendors from '../../components/Home/Vendors'
import ChatBox from '../../components/buttons/ChatBox';
import StartSelling from '../../components/Home/StartSelling'
import { styled } from 'styled-components'
import { useEffect, useState } from 'react'

const Home = ({ product, vendors }) => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [randomVendors, setRandomVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (randomProducts.length === 0 && product.length > 0) {
      const shuffledProducts = product.sort(() => 0.5 - Math.random());
      const selectedProducts = shuffledProducts.slice(0, 5);
      setRandomProducts(selectedProducts);
      setIsLoading(false);
    }
  }, [product, randomProducts]);
  
  useEffect(() => {
    if (randomVendors.length === 0 && vendors.length > 0) {
      const shuffledVendors = vendors.sort(() => 0.5 - Math.random());
      const selectedVendors = shuffledVendors.slice(0, 5);
      setRandomVendors(selectedVendors);
      setIsLoading(false);
    }
  }, [vendors, randomVendors]);
  
  console.log(vendors)
  return (
    <HomeCon>
      <div className="main">
        <section>
          <Hero />
        </section>
        <div className="app-container">
          <section>
          <div className="vendor">
          {isLoading ? (
                <p>Loading products...</p>
              ) : (
            <Vendors vendors={randomVendors}/>
              )}
            </div>
          </section>
          <section>
            <div className="product">
              {isLoading ? (
                <p>Loading products...</p>
              ) : (
                <Products product={randomProducts} />
              )}
            </div>
          </section>
          <section>
            <StartSelling />
          </section>
        </div>
        <ChatBox />
      </div>
    </HomeCon>
  )
}

const HomeCon = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
