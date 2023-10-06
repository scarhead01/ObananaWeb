
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const AccountButton = () => {
  return (
    <StyledLink to="/MyAccount"> {/* Link to the AccountPage */}
    <StyledButton>
      <StyledIcon icon={faUser} />
    </StyledButton>
  </StyledLink>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

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
export default AccountButton