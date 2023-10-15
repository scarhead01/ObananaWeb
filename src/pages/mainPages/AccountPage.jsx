import React, { useState } from 'react';
import Profile from '../../components/Customers/Profile';
import BankAndCards from '../../components/Customers/BankandCards';
import Addresses from '../../components/Customers/Address';
import MyPurchases from '../subPages/PurchasesPage';
import styled from 'styled-components';

const MyAccount = () => {
  const [selectedTab, setSelectedTab] = useState('profile');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const customerId = '651444143bf84bb9914a6964';
  return (
    <AccountCon>
      <div className="main">
        <div className="app-container">
          <div className="account-page-container">
            <div className="left-div">
              <div className="tabs">
                <div
                  onClick={() => handleTabClick('profile')}
                  className={selectedTab === 'profile' ? 'active' : ''}
                >
                  Profile
                </div>
                {/* <div
                  onClick={() => handleTabClick('bank-and-cards')}
                  className={selectedTab === 'bank-and-cards' ? 'active' : ''}
                >
                  Bank and Cards
                </div> */}
                <div
                  onClick={() => handleTabClick('addresses')}
                  className={selectedTab === 'addresses' ? 'active' : ''}
                >
                  Addresses
                </div>
                <div
                  onClick={() => handleTabClick('my-purchases')}
                  className={selectedTab === 'my-purchases' ? 'active' : ''}
                >
                  My Purchases
                </div>
              </div>
            </div>
            <div className="right-div">
              <div className="main-content">
                {selectedTab === 'profile' ? <Profile /> : null}
                {selectedTab === 'bank-and-cards' ? <BankAndCards /> : null}
                {selectedTab === 'addresses' ? <Addresses customerId={customerId} /> : null}
                {selectedTab === 'my-purchases' ? <MyPurchases /> : null}
                {/* Add component for MyPurchases when available */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountCon>
  );
};

const AccountCon = styled.div`
  display: flex;
  flex-direction: column;
height: 100%;

  .account-page-container {
    margin: 20px 0;
    display: flex;
    padding: 10px;
    background-color: white;
    flex: 1;

    .left-div {
      .tabs {
        padding: 10px;

        div {
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 8px; /* Add margin between tabs */
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #f0f0f0;
          }

          &.active {
            background-color: #007bff;
            color: #fff;
          }
        }
      }
    }

    .right-div {
      height: fit-content;
      background-color: #fff;
      margin-left: 10px;
      flex: 1;

      .main-content {
        flex: 1;
      }
    }
  }
`;

export default MyAccount;
