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
            Temp: response.data.main.temp,
            Weather: response.data.weather[0].description,
            Wind: response.data.wind.speed,
          },
          loading: false
        })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/mt-st-helens" render={ () => <Weather data="mtStHelens" /> } />
          <Route path="/the-gorge" render={ () => <Weather data="theGorge" /> } />
          <Route path="/mt-hood" render={ () => <Weather data="mtHood" /> } />
          <Route path="/the-coast" render={ () => <Weather data="theCoast" /> } />
          <Route path="/coastal-range" render={ () => <Weather data="coastalRange" /> } />
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
