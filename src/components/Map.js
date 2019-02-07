import React, { Component } from 'react';
import L from 'leaflet';
import OWM from 'leaflet-openweathermap';



class Map extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18, attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>' });

    var rain =
      L.OWM.rain({showLegend: false, opacity: 0.6, appId: process.env.REACT_APP_OWM_API1 }),
      snow = L.OWM.snow({opacity: 0.6, appId: process.env.REACT_APP_OWM_API1})
    //var city = L.OWM.current({temperatureUnit: 'F', temperatureDigits: 0, appId: process.env.REACT_APP_OWM_API1 });

    var map = L.map('home-map', { center: new L.LatLng(this.props.lat, this.props.lon), zoom: 10, layers: [osm] });
    var baseMaps = { "Open Street Map": osm };
    var overlayMaps = { "Rain": rain, "Snow": snow };
    map.addLayer(rain);
    L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
  }
  render() {
    return (
      <div id="home-map"></div>
    );
  }

}

export default Map;
