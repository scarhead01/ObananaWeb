
// import SearchResults from '../../pages/subPages/SearchResult';  
import useSearch from '../../hooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Search = () => {
  const navigate = useNavigate(); // Create a navigate function

  const onEnterPressed = (searchQuery) => {
    // Trigger navigation to MoreProducts using navigate function
    navigate('/Search-Results');
  };

  const { searchQuery, handleSearch, handleKeyPress } = useSearch(onEnterPressed);
  return (
    <SearchCon>
      <SearchInput 
        type="text" 
        placeholder="Search" 
        value={searchQuery}  
        onChange={handleSearch}  
        onKeyDown={handleKeyPress}  
      />
    </SearchCon>
  )
}

const SearchCon = styled.div`
   width: 100%; /* Set the width to 100% */
  max-width: 800px; /* Set a maximum width */
 
  box-sizing: border-box; /* Ensure padding is included in the width */
  
`
const SearchInput = styled.input`
 width: 100%;
 padding: 10px 10px;
  border-radius: 10px;
  justify-content: left;
`;
export default Search