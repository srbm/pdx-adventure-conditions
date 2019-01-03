import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Weather from './components/Weather';

class App extends Component {

  constructor() {
    super();
    this.state = {
      weather: {},
      loading: true
    };
  }

  componentDidMount() {
    this.returnWeather();
  }

  returnWeather = (city = 'Portland') => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2c5b71bef67c3f0581cecfe4a7db318&units=imperial`)
      .then(response => {
        this.setState({
          weather: {
            temp: response.data.main.temp,
            weather: response.data.weather[0].description,
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
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={ () => <Home weather={this.state.weather} />} />
          <Route path="/mt-st-helens" render={ () => <Weather city="mtStHelens" /> } />
          <Route path="/the-gorge" render={ () => <Weather city="theGorge" /> } />
          <Route path="/mt-hood" render={ () => <Weather city="mtHood" /> } />
          <Route path="/the-coast" render={ () => <Weather city="theCoast" /> } />
          <Route path="/coastal-range" render={ () => <Weather city={this.state.weather} /> } />
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
