
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import Weather from './components/Weather';
import MtStHelens from './components/MtStHelens';




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
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OWM_API1}&units=imperial`)
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
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={ () =>
            (this.state.loading)
            ? <div>Loading</div>
            : <Home weather={this.state.weather} />} />


          <Route path="/mt-st-helens" render={ () =>
            <MtStHelens lat={46.130836}
                     lon={-122.170973}
                     header="Mt St Helens"/>
                   } />
          <Route path="/the-gorge" render={ () =>
            <Weather latLong={this.state.weather}
                     header="The Gorge"/>
                   } />
          <Route path="/mt-hood" render={ () =>
            <Weather latLong={this.state.weather}
                     header="Mt Hood" />
                   } />
          <Route path="/the-coast" render={ () =>
            <Weather latLong={this.state.weather}
                     header="The Coast" />
                   } />
          <Route path="/coastal-range" render={ () =>
            <Weather latLong={this.state.weather}
                     header="Coastal Range" />
                   } />
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
