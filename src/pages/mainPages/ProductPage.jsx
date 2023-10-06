// Product Page
import  { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductList from '../../components/Products/ProductList';
import VendorList from '../../components/Vendors/VendorList';
import Header from '../../components/Header';
import Rating from '../../components/buttons/Rating';
import { useCart } from '../../context/CartContext';
import { styled } from 'styled-components';

const ProductPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart} = useCart();
  const [product, setProduct] = useState(null);
  const [vendor, setVendor] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // const product = ProductList.find(product => product.id === parseInt(id, 10));
 
  useEffect(() => {
    ProductList()
      .then(data => {
        console.log('Product List Data:', data);
        const selectedProduct = data.find(p => p._id === id);
        setProduct(selectedProduct);
        console.log('Selected Product:', selectedProduct);
        // Fetch vendor data using selected product's vendor_id
        VendorList()
          .then(vendorData => {
            const selectedVendor = vendorData.find(v => v._id === selectedProduct.vendor_id);
            setVendor(selectedVendor);
            console.log('Selected Vendor:', selectedVendor);
          })
          .catch(error => console.error('Error fetching vendors:', error));
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [id]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    console.log(`New Quantity: ${newQuantity}`);
    setQuantity(newQuantity);
  };

  
  
  const handleAddToCart = (e) => {
    e.preventDefault();
  
    const parsedQuantity = parseInt(quantity, 10);
  
    if (isNaN(parsedQuantity)) {
      setErrorMessage("Invalid quantity. Please enter a valid number.");
    } else if (parsedQuantity < product.minOrder) {
      setErrorMessage("Quantity is less than minOrder. Cannot add to cart.");
    } else {
      addToCart({ ...product, minOrder: product.minOrder }, parsedQuantity);
      setErrorMessage("Product added to cart!");
    }
  
    // Clear the error message after 3 seconds
    setTimeout(() => {
      setErrorMessage(null);
    }, 2000);
  };
  
  
  // const baseUrl = "http://143.42.66.33:8000/images/";

 const [comments, setComments] = useState([
  {
    rating: 4,
    feedback: "This is a dummy feedback.",
    userImage: "https://miro.medium.com/v2/resize:fit:1400/0*2HIp87gORgWXnW6O.jpg",
  },
  {
    rating: 5,
    feedback: "Another feedback here.",
    userImage: "https://i.ebayimg.com/images/g/IjoAAOSwmFJfmHxU/s-l1200.webp",
  },
  // Add more comments as needed
]);

  return (
    <Con>
    {/* <Header className="header" /> */}
    <div className="main">
      <div className="app-container">
        {product && (
          <div className="product-page-container">
            <div className="left-div">
              <div className="product-image-container">
                 <img src={product.product_image} alt={product.product_name} className="product-image" />
              </div>
            </div>
            <div className="middle-div">
              <div className="product-info">
                <div className="product-name-container">
                  <h2 className="product-name"> {product.product_name}</h2>
                </div>
                <div className="product-container">
                <div className="product">
                <span>Price:</span>
                <p className="product-price">₱{product.regular_price}</p>
              </div>
              <div className="product">
              <span>Minimum Order:</span>
              <p className="product-min-order">{product.minOrder}</p>
            </div>
              <div className="product">
                <span>Quantity</span>
                <div className="addtocart">
                  <button
                    className="decrement-button"
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    id="quantityInput"
                    value={quantity}
                    onChange={handleQuantityChange}
                  />

                  <button
                    className="increment-button"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>

                  <button
                    className="cart-button"
                    onClick={handleAddToCart}
                    disabled={quantity < product.minOrder}
                  >
                    Add to Cart
                  </button>
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
                </div>
                </div>
                <div className="vendor-reputation">
                  <Rating rating={product.reputation} />
                  {/* <span className="total-rating">
                    {product.reputation.toFixed(1)}/5.0 ({product.totalRating} reviews)
                  </span> */}
                </div>
              </div>
            </div>
            <div className="right-div">
              <div className="min-order-info">
                <span>The minimum order quantity is: {product.minOrder}</span>
                <div className="button-container">
                <button className="inquiry-button">Send Inquiry</button>
                <button className="call-button">Call Us</button>
              </div>
              </div>
              
            </div>
          </div>
        )}
        <div className="vendor-info">
        {vendor && (
            <div className="vendor-page-container">
              <div className="vendor-details">
                <Link to={`/vendor/${vendor._id}`}key={vendor._id}>
                <div className="vendor-image-container">
                  <img src={baseUrl + vendor.file_path_image} alt={vendor.user_login} className="vendor-image" />
                </div>
                </Link>
                <div className="vendor-info">
                  <h2 className="vendor-name">{vendor.user_login}</h2>
                  <div className="vendor-description">{vendor.description}</div>
                  {/* <div className="vendor-datejoined">Joined: {formattedDateString}</div> */}
                </div>
              </div>
            </div>
          )}
</div>
        {product && (
  <div className="product-details">
    <h2>Product Overview</h2>
    <p>
      Awei CL-116T 1M Type C Cable To Aux 3.5mm Audio Plug Adapter Cables Adaptor For Type-C Smartphones
    </p>
    <ul>
      <li>Cable Size: Diameter: 3.0mm</li>
      <li>Length: 1 Meter</li>
      <li>Antioxidant plug, high fidelity design and top grade aluminum casing to increase shield function in order to avoid interference and also make sure signal transmit perfectly.</li>
      <li>Widely compatible with Type-C interface devices.</li>
      <li>3.5mm international standard plug, super compatible to Car AUX interface, Speakers and all devices which can be used to 3.5mm plug.</li>
      <li>Anaerobic copper wire can make the earphone's sound revivification.</li>
    </ul>
    <p>
      Note:
    </p>
    <ol>
      <li>Due to the difference between different monitors, the pictures may not reflect the actual color of the item.</li>
      <li>Compare the detail sizes with yours, please allow 1-3cm error, due to manual measurement.</li>
      <li>Please leave a message before you give the bad feedback, if the products have some problems.</li>
      <li>Thanks for your understandings.</li>
    </ol>
  </div>
)}

{product && (
        <div className="comments-section">
          <h2>Comments</h2>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <p>Rating: {comment.rating}</p>
                <p>{comment.feedback}</p>
                <img src={comment.userImage} alt="" />
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  </Con>
);
}

const Con = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
 

  .product-page-container {
    display: flex;
    padding: 10px;
    background-color: white;
  }

  .left-div {
  background-color: #f4f4f4;
  display: flex;
}

.product-image-container {
  width: 400px;
  height: 400px;
  overflow: hidden;
  display: flex;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  
}

.middle-div {
  margin: 0 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;

  .product-name-container {
    width: 500px;
    max-height: 60px;

    .product-name {
    font-size: 20px;
    margin-bottom: 10px;
    word-break: break-word; 
  }
  }
  .product-container {
  display: flex;
  flex-direction: column;
  

  .product {
    display: flex;
  align-items: center;
 
 

   span {
  font-weight: bold;
  width: 150px; 
  margin: 20px 0;
}

 p {
  margin-left: 10px;
  flex-grow: 1;
}
}
}
  .addtocart {
    margin-left: 10px;
    flex-grow: 1;
    input{
    text-align: center;
    width: 50px;
    padding: 5px;
  }
  .decrement-button,
  .increment-button{
   padding: 5px;
  }
  .cart-button{
    padding: 5px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: #ff5733;
    margin: 10px;
  }

  .cart-button:disabled {
    background-color: #ccc; /* Change to the desired color */
    color: #666; /* Change to the desired color */
}
  
  }

  
}

  .right-div {
   height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  margin-left: 10px;
  border: 2px solid #000; /* Add border */

    .button-container {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }

  .inquiry-button,
.call-button {
  font-size: 16px;
 
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}
  }

  .product-details {
  padding: 50px;
  background-color: #fff;
  border-radius: 10px;
 
}

.product-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-details p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.product-details ul,
.product-details ol {
  margin: 0;
  padding: 0;
  
}

.product-details li {
  margin-bottom: 10px;
}

.product-details ol li::before {
  content: "\\2022";  
  color: #333; 
  display: inline-block;
  width: 1em; 
  margin-left: -1em; 
}
.comments-section {
  background-color: white;
  max-width: 100%; 
  margin-top: 30px;
  padding: 50px;
}

.comments-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.comments-section ul {
  list-style-type: none;
  padding: 0;
}

.comments-section li {
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
}

.comments-section p {
  font-size: 18px;
  color: #333;
  margin: 0 0 10px 0;
}

.comments-section img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
  object-fit: cover;
}


.vendor-page-container {
    display: flex;
    max-width:100%;
    margin: 20px 0;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 

    .vendor-details {
    align-items: center; 
    display:flex ;

    .vendor-image-container {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .vendor-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  }
  .vendor-info {
    margin-left: 20px;
    .vendor-name {
    font-size: 1.5em; 
    font-weight: bold;
    margin-bottom: 10px;
  }

  .vendor-description {
    font-size: 1.2em; 
    margin-bottom: 10px;
  }

  .vendor-datejoined {
    font-size: 1.2em;
    color: #ffa726;
  }

  }
  }
  }

`;

export default ProductPage;
