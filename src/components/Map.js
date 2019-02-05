import React, { Component } from 'react';
import L from 'leaflet';



class Map extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    var map = L.map('home-map').setView([45.536951, -122.649971], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: process.env.REACT_APP_MAPBOX_API1
    }).addTo(map);
  }
  render() {
    return (
      <div id="home-map"></div>
    );
  }

}

export default Map;
