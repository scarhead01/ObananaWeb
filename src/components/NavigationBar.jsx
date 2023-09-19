import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navs =[
  {
    name:"Home",
    link: "/"
  },
  {
    name:"Sell In Obanana",
    link: "/"
  },
  {
    name:"Feedback",
    link: "/"
  },
  {
    name:"FAQs",
    link: "/"
  },
];

const NavBar = () => {
  return (
    <NavContainer>
        <NavList>
          {navs.map((nav, index) => (
            <NavItem key={index}>
              <Link to={nav.link}>{nav.name}</Link>
            </NavItem>
          ))}
        </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  
  color: #333;
  font-size: 18px;
  padding: 10px 0; /* Add some padding for spacing */
  margin-left: 10px;

  a {
    text-decoration: none; /* Remove underline from links */
    color: #333; /* Set link color */
  }
`;

const NavList = styled.ul`
   list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center; /* Center the navigation items */
`;

const NavItem = styled.li`
  display: inline;
  margin: 0 10px;
`;



export default NavBar;
// const NavBar = () => {
//   return (
//     <NavbarContainer>
//     <Link to="/">
//        <div className="nav">Home</div>
//     </Link>
//     <Link to="/">
//        <div className="nav">Sell In Obanana</div>
//     </Link>
//     <Link to="/">
//        <div className="nav">Feedback</div>
//     </Link>
//     <Link to="/">
//        <div className="nav">FAQs</div>
//     </Link>
//     <Link to="/">
//        <div className="nav">Sell In Obanana</div>
//     </Link>
// </NavbarContainer>
//   )
// }

// const NavbarContainer = styled.div`
//     padding-top: 20px;
//     padding-left: 50px;
//     padding-bottom: 20px;
//     display: flex;
//     .nav {
//     margin-right: 10px;
//     }
// `
// export default NavBar