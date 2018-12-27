import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import MainNav from './components/MainNav';

const Home = () => {
  return (
    <Jumbotron>
      <h1>Where's Your Next Adventure</h1>
      <p>Select the area where you are going to see what the weather is like.</p>
      <MainNav />
    </Jumbotron>
  );
}

export default Home;
