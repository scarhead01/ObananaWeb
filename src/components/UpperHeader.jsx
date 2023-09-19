
import { styled } from 'styled-components'
import NavigationBar from './NavigationBar'
import Logo from '../assets/logo.png'
import AccountButton from './buttons/AccountButton'
import CartButton from './buttons/CartButton';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UpperHeader = () => {
  return (
   <Container>
    <div className="left">
      <div className="ObnLogo">
        <img className='logo' src={Logo} alt="" />
      </div>
      <div className='nav-bar'> 
        <NavigationBar/>
      </div>
    </div>
    <div className="right">
      <div className="social">
        <a href="https://www.facebook.com/ObananaPH/" target="blank" > 
          <FontAwesomeIcon className='icon' icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/obananaph/?hl=en" target="blank">
          <FontAwesomeIcon className='icon' icon={faInstagram} />
        </a>
        <a href="https://ph.linkedin.com/company/obananaph" target="blank">
          <FontAwesomeIcon className='icon' icon={faLinkedin} />
        </a>
        <a href="https://www.youtube.com/channel/UCWFO_X9pTrhRv2LLFOZdCdQ" target="blank">
          <FontAwesomeIcon className='icon' icon={faYoutube} />
        </a>
      </div>
      <div className="button">
      <CartButton/>
      <AccountButton/>
      </div>
    </div>
   </Container>
  )
}
const Container =styled.div `
   display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-left: 30px;
  padding-right:30px ;
    
  
    & .ObnLogo{
      .logo{
        width: 140px;
      }
    }
    & .social{
      display: flex;
      .icon{
        color: black;
        font-size: 20px;
       padding: 5px;
       .button{
        width: 500px;
       }
    }
    }
  
`
export default UpperHeader