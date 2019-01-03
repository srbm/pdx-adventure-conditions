import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Weather = props => {
  let weather = props.latLong;
  return (
    <div>
      <h2>{props.header}</h2>
      <ListGroup>
        <ListGroupItem header="Temperature">{weather.temp}&#8457;</ListGroupItem>
        <ListGroupItem header="Outlook">{weather.weather}</ListGroupItem>
        <ListGroupItem header="Wind Speed">{weather.wind} mph</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Weather;
