import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const MainNav = () => {
  return (
    <Nav bsStyle="pills" justified>
      <NavItem eventKey={1} href="/mt-st-helens">Mt St Helens</NavItem>
      <NavItem eventKey={2} href="the-gorge">The Gorge</NavItem>
      <NavItem eventKey={3} href="mt-hood">Mt Hood</NavItem>
      <NavItem eventKey={4} href="the-coast">The Coast</NavItem>
      <NavItem eventKey={5} href="coast-range">Coastal Range</NavItem>
    </Nav>
  );
}

export default MainNav;
