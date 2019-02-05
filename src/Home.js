import React from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';
import MainNav from './components/MainNav';
import Map from './components/Map';

const Home = props => {
  let weather = props.weather;

  return (
    <div>
      <Jumbotron>
        <h1>Where's Your Next Adventure?</h1>
        <h2>Portland, Oregon</h2>
        <ListGroup>
          <ListGroupItem header="Temperature">{weather.temp}&#8457;</ListGroupItem>
          <ListGroupItem header="Outlook">{weather.desc}</ListGroupItem>
          <ListGroupItem header="Wind Speed">{weather.wind} mph</ListGroupItem>
        </ListGroup>
      </Jumbotron>
      <Map />
      <MainNav />
    </div>
  );
}

export default Home;
