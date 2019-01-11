import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const MainNav = () => {
  return (
    <Nav bsStyle="pills" justified>
      <LinkContainer eventKey={1} to="/mt-st-helens"><NavItem>Mt St Helens</NavItem></LinkContainer>
      <LinkContainer eventKey={2} to="/the-gorge"><NavItem>The Gorge</NavItem></LinkContainer>
      <LinkContainer eventKey={3} to="/mt-hood"><NavItem>Mt Hood</NavItem></LinkContainer>
      <LinkContainer eventKey={4} to="/the-coast"><NavItem>The Coast</NavItem></LinkContainer>
      <LinkContainer eventKey={5} to="/coastal-range"><NavItem>Coastal Range</NavItem></LinkContainer>
    </Nav>
  );
}

export default MainNav;
