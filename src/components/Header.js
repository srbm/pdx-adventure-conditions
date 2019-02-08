import React from 'react';
import MainNav from './MainNav';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <LinkContainer exact to='/pdx-adventure-conditions'><h1>Portland Area Adventure Conditions</h1></LinkContainer>
      <div>
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
