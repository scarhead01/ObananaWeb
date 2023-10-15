
import Header from '../../components/Header'
import Hero from '../../components/Home/Hero'
import FeaturedSlider from '../../components/FeaturedSlider'
import Products from '../../components/Home/Products'
import Vendors from '../../components/Home/Vendors'
import ChatBox from '../../components/buttons/ChatBox';
import StartSelling from '../../components/Home/StartSelling'
// import '../../assets/constant-styles/constant.css'; 
// import { ArticleSectionContainer } from '../../assets/constant-styles/constant'; '../../assets/constant-styles/constant'
import { styled } from 'styled-components'
const Home = () => {

    
   
  return (
   <HomeCon>
     {/* <Header className="header" /> */}
     <div className="main">
     <section >
    <Hero/>  
    </section>  
 <div className="app-container">
    
 <section >
    <Vendors/>
    </section>
    <section>
    <Products/>
</section>
<section>
    <StartSelling/>
</section>






   
 </div>
 <ChatBox />
 </div>
   </HomeCon>
   
  )
}

const HomeCon =styled.div`
   display: flex;
  flex-direction: column;
 

  
  
`








export default Home