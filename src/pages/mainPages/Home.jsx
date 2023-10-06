
import Header from '../../components/Header'
import HeroSlider from '../../components/HeroSlider'
import FeaturedSlider from '../../components/FeaturedSlider'
import Products from '../../components/Products/Products'
import Vendors from '../../components/Vendors/Vendors'
import ChatBox from '../../components/buttons/ChatBox';
// import '../../assets/constant-styles/constant.css'; 
// import { ArticleSectionContainer } from '../../assets/constant-styles/constant'; '../../assets/constant-styles/constant'
import { styled } from 'styled-components'
import A1 from '../../assets/article-images/01.jpg';
import A2 from '../../assets/article-images/02.jpg';
import A3 from '../../assets/article-images/03.jpg';
const Home = () => {
    const articles = [
        { type: 'text', 
          title: 'Discover a World of Choices at Unbeatable Wholesale Rates!', 
          content: 'Explore an extensive range of top-notch products at unbeatable wholesale rates. We pride ourselves on offering quality without compromise, ensuring your business gets the best value. With us, you\'re not just buying products, you\'re investing in excellence.' 
        },
        { type: 'image', 
          imageUrl: A1
        },
        { type: 'text', 
          title: 'Explore a Vast Marketplace of Opportunities', 
          content: 'Uncover a diverse range of industries, connect with global partners, and tap into a wealth of potential clients. Our platform opens doors to a thriving ecosystem, where opportunities for growth and expansion are boundless.' 
        },
        { type: 'image', 
          imageUrl: A2
        },
        { type: 'text', 
          title: 'Drive Growth, Boost Profitability', 
          content: 'Maximize your potential with strategies designed to propel your business forward. Our solutions are engineered to not only spur expansion but also enhance your bottom line, ensuring sustained success in the competitive world of B2B commerce' 
        },
        { type: 'image', 
          imageUrl: A3
        },
      ];
    
      const articles2 = [
        { type: 'image', 
        imageUrl: A1
      },
        { type: 'text', 
          title: 'Discover a World of Choices at Unbeatable Wholesale Rates!', 
          content: 'Explore an extensive range of top-notch products at unbeatable wholesale rates. We pride ourselves on offering quality without compromise, ensuring your business gets the best value. With us, you\'re not just buying products, you\'re investing in excellence.' 
        },
        { type: 'text', 
          title: 'Explore a Vast Marketplace of Opportunities', 
          content: 'Uncover a diverse range of industries, connect with global partners, and tap into a wealth of potential clients. Our platform opens doors to a thriving ecosystem, where opportunities for growth and expansion are boundless.' 
        },
        
      ];
   
  return (
   <HomeCon>
     {/* <Header className="header" /> */}
     <div className="main">
     <section >
    <HeroSlider/>  
    </section>  
 <div className="app-container">
    
 <ArticleSection1 id='article'>
      {articles.map((article, index) => (
       <div key={index} className='Card'>
       {article.type === 'text' && (
        <div className='TextCardContent'>
        <h2>{article.title}</h2>
        <br></br>
        <p>{article.content}</p>
      </div>
       )}
       {article.type === 'image' && <img src={article.imageUrl} alt={article.title} className='img-art'/>}
     </div>
      ))}
</ArticleSection1>
<FeaturedProducts>
  <h1>Featured Products</h1>
        <Products/>
    </FeaturedProducts>

<ArticleSection2 id='article2'>
  <div className='LeftCard'>
    <div className='Card'>
      {articles2[0].type === 'image' && <img src={articles2[0].imageUrl} alt={articles2[0].title} className='img-art' />}
      {articles2[0].type === 'text' && (
        <div className='TextCardContent'>
          <h2>{articles2[0].title}</h2>
          <br />
          <p>{articles2[0].content}</p>
        </div>
      )}
    </div>
  </div>
  <div className='RightCards'>
    {articles2.slice(1).map((article, index) => ( // Exclude the first element (image)
      <div key={index} className='Card'>
        {article.type === 'text' && (
          <div className='TextCardContent'>
            <h2>{article.title}</h2>
            <br />
            <p>{article.content}</p>
          </div>
        )}
      </div>
    ))}
  </div>
</ArticleSection2>


<FeaturedVendors>
  <h1>Featured Vendors</h1>
        <Vendors/>
    </FeaturedVendors>

    <Featured>
        <div className="featured">
            <div className="heading">
                <h1>Elevate Your Business with Effortless, Innovative B2B Solutions Today.</h1>
            </div>
            <div className="featured-slides">
                <FeaturedSlider/>
            </div>
        </div>
    </Featured>
 </div>
 <ChatBox />
 </div>
   </HomeCon>
   
  )
}

const HomeCon =styled.div`
   display: flex;
  flex-direction: column;
  height: 100vh;

   

  
`

const ArticleSection1 = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .Card {
    display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  background-color: #B94126;
  border: 1px solid #ccc;
  margin: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: calc(33.33% - 10px);
  height: 500px;
  box-sizing: border-box;
  }

  .TextCardContent {
    text-align: left; /* Left-align the title */
  padding: 50px;
  justify-content: center;
  color: white;
  h2 {
    margin: 0; /* Remove default margin for h2 */
    line-height: 40px;
  }

  p {
    text-align: center; /* Center-align the content */
    font-size:16px;
    letter-spacing: 2px; 
    @media screen and (max-width: 768px) {
        width: calc(100% - 20px);
      font-size: 14px;
    }
  }
  }

  .img-art {
    width: 100%;
  height: 100%;
  object-fit: cover;
  }

  
`;

const ArticleSection2 = styled.section`
  display: flex;
  justify-content: space-between; /* This will create space between the elements */
  align-items: stretch; /* This will make sure both sides have equal height */
  
  .LeftCard {
    width: calc(33.33% - 10px);
    height: 500px;
    box-sizing: border-box;
    text-align: center;
    color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }

  .LeftCard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .LeftCard .Card {
    background-color: #B94126;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: white;
    height: auto;
    flex-grow: 1;
  }
  .LeftCard .TextCardContent {
    text-align: left;
    padding: 20px;
    h2 {
      margin: 0;
      line-height: 40px;
    }

    p {
      text-align: center;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
  .RightCards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(66.66% - 10px);
  }
  
  .RightCards .Card {
    background-color: #B94126;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    height: 240px;
    box-sizing: border-box;
    color: white;
  }

  .TextCardContent {
    text-align: left;
    padding: 20px;
    h2 {
      margin: 0;
      line-height: 40px;
    }

    p {
      text-align: center;
      font-size: 16px;
      letter-spacing: 2px;
    }
  }

  @media screen and (max-width: 768px) {
    .LeftCard, .Card {
      width: 100%; /* Adjust width for smaller screens */
    }
  }
`;


const Featured = styled.div`
  flex-wrap: wrap;
  justify-content: center;
 

  .featured{
    padding: 20px;
  justify-content: center;
  align-items: center;
 
  .heading {
    display: flex;
    background-color: white;
    h1{
    text-align: center;
    font-size: 48px;
    font-family: 'Roboto', sans-serif;
    color: #F0AD45;

   
  }
 }
 .featured-slides{
      background-color: white;
      padding: 20px;
    }
  }
`;

const FeaturedProducts = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
`
const FeaturedVendors = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

`
export default Home