import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class MtStHelens extends Component {

  constructor() {
    super();
    this.state = {
      weather: {},
      loading: true
    };
  }

  componentDidMount() {
    this.returnLatLonWeather(this.props.lat, this.props.lon);
  }

  returnLatLonWeather = (lat, lon) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OWM_API1}&units=imperial`)
      .then(response => {
        this.setState({
          weather: {
            temp: response.data.main.temp,
            desc: response.data.weather[0].description,
            wind: response.data.wind.speed,
          },
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching/parsing data.", error);
      });
  }

  render() {
    return (
      <div>
        <h2>{this.props.header}</h2>
        {
          (this.state.loading)
          ? <div>Loading...</div>
          : <ListGroup>
              <ListGroupItem header="Temperature">{this.state.weather.temp}&#8457;</ListGroupItem>
              <ListGroupItem header="Outlook">{this.state.weather.desc}</ListGroupItem>
              <ListGroupItem header="Wind Speed">{this.state.weather.wind} mph</ListGroupItem>
            </ListGroup>
      }
      </div>
    );
  }
}

export default MtStHelens;
