
// import { useState } from 'react';

// const useSearch = (onEnterPressed) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       onEnterPressed(searchQuery);
//     }
//   };

//   return {
//     searchQuery,
//     handleSearch,
//     handleKeyPress
//   };
// };

// export default useSearch;

import { useState } from 'react';

const useSearch = (onEnterPressed) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnterPressed(searchQuery);
    }
  };

  return { searchQuery, handleSearch, handleKeyPress };
};

export default useSearch;
