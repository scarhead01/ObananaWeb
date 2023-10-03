import React, { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
const MyPurchases = () => {
   
    // New Edit
    
    
    const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  const [activeTab, setActiveTab] = useState('toShip'); 



  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <MyPurchasesContainer>
        <Header className="header" />
      <div className="main">
        <div className="app-container">
      <div className='TabsContainer'>
         <div
              className={`Tab ${activeTab === 'toShip' ? 'active' : ''}`}
              onClick={() => handleTabClick('toShip')}
            >
              To Ship
            </div>
        <div className='Tab' onClick={() => handleTabClick('toReceive')} isActive={activeTab === 'toReceive'}>
          To Receive
        </div>
        <div className='Tab' onClick={() => handleTabClick('completed')} isActive={activeTab === 'completed'}>
          Completed
        </div>
        <div className='Tab' onClick={() => handleTabClick('cancelled')} isActive={activeTab === 'cancelled'}>
          Cancelled
        </div>
        <div className='Tab' onClick={() => handleTabClick('refund')} isActive={activeTab === 'refund'}>
          Refund
        </div>
      </div>
      <div className='TabContent'>
        {/* Render content based on activeTab */}
        {activeTab === 'toShip' && <div> {activeTab === 'toShip' && (
              <ul className="ItemList">
              {selectedItems.map((item) => (
                <li className="Item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="ItemInfo">
                    <p className="ItemName">{item.name}</p>
                    <p className="ItemQuantity">Quantity: {item.quantity}</p>
                    <p className="ItemTotal">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            )}</div>}
        {activeTab === 'toReceive' && <div>To Receive Content</div>}
        {activeTab === 'completed' && <div>Completed Content</div>}
        {activeTab === 'cancelled' && <div>Cancelled Content</div>}
        {activeTab === 'refund' && <div>Refund Content</div>}
      </div>
      </div>
      </div>
    </MyPurchasesContainer>
  );
};

const MyPurchasesContainer = styled.div`
 display: flex;
  flex-direction: column;
  height: 100vh;

  .TabsContainer{
    display: flex;
    margin-top: 20px;
  margin-bottom: 20px;
  }

  .Tab{
    flex: 1;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? '#007bff' : '#f7f7f7')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  }

  .TabContent{
    background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .ItemList {
  list-style: none;
  padding: 0;
}

.Item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.Item img {
  max-width: 100px;
  margin-right: 20px;
}

.ItemInfo {
  text-align: left;
}

.ItemName {
  font-weight: bold;
  margin: 0 0 10px;
}

.ItemQuantity {
  margin: 0 0 5px;
}

.ItemTotal {
  font-weight: bold;
  margin: 0;
}
`;




export default MyPurchases;
