
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const AccountButton = () => {
  return (
    <StyledButton>
    <StyledIcon icon={faUser} />
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
export default AccountButton