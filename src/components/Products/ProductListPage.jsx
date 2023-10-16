


import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductListPage = ({product, item}) => {
  // const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [maxVisiblePages, setMaxVisiblePages] = useState(10);
  const [prod, setprod] = useState();
  useEffect(() => {
   
    if (item <= product.length) {
      // setprod(product.splice(1, item));
      setprod([...prod,]);
    }
    // }
  }, []);


  const handleHover = event => {
    const productName = event.target.innerText;
    event.target.title = productName;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const totalPageCount = Math.ceil(product.length / itemsPerPage);

  const getPageNumbers = () => {
    const activePage = currentPage;
    const totalPageCount = Math.ceil(product.length / itemsPerPage);

    if (totalPageCount <= maxVisiblePages) {
      return [...Array(totalPageCount).keys()].map(i => i + 1);
    }

    let startPage = Math.max(activePage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPageCount);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return [...Array(endPage - startPage + 1).keys()].map(i => i + startPage);
  };

  return (
    <ProductCon>
      <div className="main">
        <div className="app-container">
          <div className="product-list">
            {currentItems.map(product => (
              <Link to={`/product/${product._id}`} key={product._id} className="product-card">
                <div className="image-box">
                  <img src={product.product_image} alt={product.product_name} className="product-image" />
                </div>
                <div className="product-details">
                  <div className="product-name" onMouseOver={handleHover}>{product.product_name}</div>
                  <div className="product-price">₱{product.regular_price}</div>
                </div>
              </Link>
            ))}
          </div>
          <CustomPagination>
          <Pagination.Prev
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            />
            {getPageNumbers().map(number => (
              <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => paginate(number)}
              >
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPageCount}
            />
          </CustomPagination>
        </div>
      </div>
    </ProductCon>
  );
};
const ProductCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; 
    padding: 20px 0;
    justify-content: center;
  }

  .product-card {
     text-decoration: none;
  color: inherit;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    width: 200px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .image-box {
  width: 100%;
  height: 200px; /* Set a fixed height for the image box */
  background-color: #ffffff; /* Choose a suitable background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
  .product-image {
    width: 100%;
    height: 200px; /* Set a fixed height for the image */
    border-radius: 4px;
    object-fit: contain; /* Ensure images maintain aspect ratio */
  }

  .product-details {
    margin-top: 10px;
    
  }

  .product-name {
    font-size: 1em;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .product-price {
    font-size: 1em;
    color: #333;
  }

`;

const CustomPagination = styled(Pagination)`
  margin-top: 20px;
  
  .page-item {
    margin: 0 2px;
    font-size: 16px;
  }

  .page-link {
    color: #333;
  }

  .page-item.active .page-link {
    background-color: #333;
    border-color: #333;
  }

  .page-link:focus {
    box-shadow: none;
  }
`;
export default ProductListPage;
