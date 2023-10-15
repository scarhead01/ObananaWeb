
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
import Search from './buttons/Search';
import Login from '../auth/Login';
import { useState } from 'react';

const UpperHeader = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };
  return (
   <Container>
    <div className="upper">
    <div className="ObnLogo"> 
    <a href="/">
        <img className='logo' src={Logo} alt="" /></a>
      </div>
    <div className='search'> 
        <Search/>
      </div>
      <div className="sign-up">
        <button>Sign Up</button>
      </div>
      </div>
      <div className="lower">
        <div className="buyer-supplier-button">
          <button>I'm a Buyer</button> | <button>I'm a Supplier</button>
        </div>
        <div className="app">
          <button>Get Mobile App</button>
        </div>
        <div className="login">
        <button onClick={toggleLoginModal}>Login</button>
        {showLogin && <Login onClose={toggleLoginModal} />}
      </div>
   
      </div>
   

      {/* <div className="button">
      <CartButton/>
      <AccountButton/>
      </div> */}
   </Container>
  )
}
const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 30px;

  .upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .ObnLogo {
    .logo {
      width: 140px;
    }
  }

  .search {
    flex-grow: 1;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    max-width: 50%;
  }

  .sign-up {
  }

  .lower {
    display: flex;
    align-items: center;
    margin-top: 10px; 
    justify-content: space-between;
    width: 100%;
  }

  .buyer-supplier-button,
  .app,
  .login {
    display: flex;
    align-items: center;
  }

  .buyer-supplier-button {
    flex: 1;
    justify-content: flex-start;
    button {
      border: none;
      padding: 0;
      background: none;
      cursor: pointer;
      font: inherit;
    }
  }

  .app {
    flex: 1;
    justify-content: center;
  }

  .login {
    flex: 1;
    justify-content: flex-end;
    text-align: right;
  }
`;

export default UpperHeader