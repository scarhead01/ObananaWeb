import React, { useState } from 'react';
import styled from 'styled-components';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <RegisterCon>
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            className="register-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="register-input"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            className="register-input"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="password"
            className="register-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </RegisterCon>
  );
};

const RegisterCon = styled.div`
  display: flex; 
   justify-content: center; 
  align-items: center;
  height: 100%;
  .register-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .register-input {
    width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }

  .register-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  .register-button:hover {
    background-color: #0056b3;
  }
`;

export default Register;
