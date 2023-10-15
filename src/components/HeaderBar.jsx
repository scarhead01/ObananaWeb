import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Search from './buttons/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
const categories =[
  {
    catName:"Gadgets",
    subCategory: [
      {
        subName:"Accesories",
        sublinks:[
          {
            name:"Laptop"
          }
        ]
      }
    ]
  },
  {
    catName:"Apparels",
    subCategory: [
      {
        subName:"Men",
        sublinks:[
          {
            name:"Clothing"
          }
        ]
      },
      {
        subName:"Women",
        sublinks:[
          {
            name:"Clothing"
          },
          {
            name:"Makeup"
          }
        ]
      },
      
    ]
  }
];



const HeaderBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  return (
    <HeaderContainer>
    
     <NavContainer>
      <NavAndCategory>
        <CategoryNavItem
          onMouseEnter={() => setActiveCategory('Category')}
          onMouseLeave={() => setActiveCategory(null)}
        >
          <FontAwesomeIcon icon={faList} /> Category
          <CategoryPopup show={activeCategory === 'Category'}>
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                onMouseEnter={() => setActiveSubCategory(category.catName)}
                onMouseLeave={() => setActiveSubCategory(null)}
              >
                {category.catName}
                <SubCategoryPopup show={activeSubCategory === category.catName}>
                  {category.subCategory.map((subCat, subIndex) => (
                    <SubCategoryItem key={subIndex}>
                      {subCat.subName}
                      <SubNavList>
                        {subCat.sublinks.map((sublink, sublinkIndex) => (
                          <SubNavItem key={sublinkIndex}>
                            <Link to={sublink.link}>{sublink.name}</Link>
                          </SubNavItem>
                        ))}
                      </SubNavList>
                    </SubCategoryItem>
                  ))}
                </SubCategoryPopup>
              </CategoryItem>
            ))}
          </CategoryPopup>
        </CategoryNavItem>
      </NavAndCategory>
      
    </NavContainer>
    <CenteredSearch>
        <Search />
      </CenteredSearch>
    </HeaderContainer>
    
  )
}

const HeaderContainer = styled.div`
  display: flex;  
  align-items: center;
 padding: 20px 30px;
  
  
`;

const NavContainer = styled.div`
  color: #333; /* Change the text color to a dark shade */
  font-size: 18px;
  font-family: Arial, sans-serif; /* Change the font to Arial or your preferred font */

`;

const NavAndCategory = styled.div`
  display: flex;
  align-items: center;
  
`;


const CategoryNavItem = styled.li`
  display: inline;
  margin: 0 10px;
  position: relative;
  cursor: pointer;
  
`;

const CategoryPopup = styled.div`

position: absolute;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 1000;
  border-radius: 5px;
  max-height: 300px; /* Set a max height */
  width: 200px; /* Set a specific width */
  
  
`;

const CategoryItem = styled.div`
  margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SubCategoryPopup = styled.div`
  display: flex; /* Use flexbox */
  flex-wrap: wrap; /* Allow items to wrap to the next row */
  left: 100%;
  top: 0;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  z-index: 1001;
  border-radius: 5px;
  max-height: 300px; /* Set a max height */
  width: 400px; 
  
`

const SubCategoryItem = styled.div`
display: flex;
flex-wrap:wrap;
 margin: 5px 0;
  padding: 10px;
  cursor: pointer;
  width: 45%;
 
`;

const SubNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-left: 20px;
`;

const SubNavItem = styled.li`
  margin: 5px 0;
`;

const CenteredSearch = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;
  
`;

export default HeaderBar