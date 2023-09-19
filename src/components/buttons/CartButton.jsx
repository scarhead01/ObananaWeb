
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
   
    const navigate = useNavigate(); // Get the navigate function

    const handleClick = () => {
      navigate('/cart'); // Navigate to the CartPage
    };
  
    return (
     <StyledButton onClick={handleClick}>
      <StyledIcon icon={faShoppingCart} />
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: inherit;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 24px; 
  color: #ff5733; 
`;
export default CartButton