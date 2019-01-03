import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import MainNav from './components/MainNav';

const Home = props => {
  let weather = props.weather;
  return (
    <div>
      <Jumbotron>
        <h1>Where's Your Next Adventure?</h1>
        <h2>Portland, Oregon Weather</h2>
        <ListGroup>
          <ListGroupItem header="Temperature">{weather.temp}&#8457;</ListGroupItem>
          <ListGroupItem header="Outlook">{weather.weather}</ListGroupItem>
          <ListGroupItem header="Wind Speed">{weather.wind} mph</ListGroupItem>
        </ListGroup>
      </Jumbotron>
      <MainNav />
    </div>
  );
}

export default Home;
