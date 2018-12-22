import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const MainNav = () => {
  return (
    <Nav bsStyle="pills" justified>
      <NavItem>Mt St Helens</NavItem>
      <NavItem>The Gorge</NavItem>
      <NavItem>Mt Hood</NavItem>
      <NavItem>The Coast</NavItem>
      <NavItem>Coastal Range</NavItem>
    </Nav>
  );
}

export default MainNav;
