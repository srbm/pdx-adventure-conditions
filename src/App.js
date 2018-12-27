import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Weather from './components/Weather';

class App extends Component {
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
