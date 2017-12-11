import React, { Component } from "react";
import "./App.css";
import MapBox from './MapBox';


class App extends Component {
  render() {
    // var mymap = L.map("base-map").setView([51.505, -0.09], 13);
    // L.tileLayer(
    //   "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
    //   {
    //     attribution:
    //       'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //     maxZoom: 18,
    //     id: "mapbox.streets",
    //     accessToken: MAPBOX_API_KEY
    //   }
    // ).addTo(mymap);

    return (
      <div className="App">
        <MapBox />
      </div>
    );
  }
}

export default App;
