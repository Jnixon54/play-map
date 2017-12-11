import React, { Component } from "react";
import { render } from "react-dom";
import {
  Map,
  TileLayer,
  LayerGroup,
  GeoJSON,
  Tooltip,
  Popup,
  LayersControl
} from "react-leaflet";

import geojsonArea from "geojson-area";
import {plays, isopach} from "../playBoundaries";
const { BaseLayer, Overlay } = LayersControl;
// import { MAPBOX_API_KEY } from "../.config";

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: '',
      selectedPoly: ''
    };
    this.mapElements = {};
  }

  handlePolyClick(name) {
    this.setState({ selectedPoly: name });
    this.mapElements.myMap.leafletElement.fitBounds(
      this.mapElements[name].leafletElement.getBounds())

    console.log('Selected Poly: ', this.state.selectedPoly);
  }

  mouseOver(name) {
    this.setState({hover: name})

    console.log('Hover target: ', this.state.hover);
  }
  mouseOut() {
    this.setState({hover: ''})
    
    console.log('Hover target: ', this.state.hover);
    // this.mapElements[name].leafletElement.options.weight = 
    // this.mapElements[name].leafletElement.options.weight - 1;
    // console.log(this.mapElements[name].leafletElement.options.weight);
  }
  // console.log(MAPBOX_API_KEY)
  render() {
    const position = [39.8, -98.6];
    console.log(this)
    // const map_id = "mapbox.streets";
    let playBoundaries = plays.map((play, index) => {
      let name = ("geojson" + play.name).replace(/ /g, "");
      let weight = this.state.hover === name ? 3 : 2;
      return (
        <GeoJSON
          key={index}
          ref={ref => (this.mapElements[name] = ref)}
          name={name}
          color={play.color}
          fillOpacity={0.2}
          weight={weight}
          data={play.JSON}
          onClick={() => this.handlePolyClick(name)}
          onMouseOver={() => this.mouseOver(name)}
          onMouseOut={() => this.mouseOut()}
        >
          <Tooltip>
            <span>{play.name}</span>
          </Tooltip>
          <Popup className="popup">
            <div>
              <h3>{play.name}</h3>
              { 
              play.about ?
              <p>
                <span style={{ "fontWeight": "bold" }}>Age: </span>{play.about.age}
              </p>
              : '' 
              }
              <p>
                <span style={{ "fontWeight": "bold" }}>Area: </span>
                  {(geojsonArea
                    .geometry((play.JSON)) / 1000000)
                    .toLocaleString('en-US', {minimumFractionDigits: 2})} Km
                <sup>2</sup>
              </p>
              { 
              play.about ?
              <p>
                <span style={{ "fontWeight": "bold" }}>Importance: </span>{play.about.importance}
              </p>
              : ''
              }
            </div>
          </Popup>
        </GeoJSON>
      );
    });
    let isopachs = isopach.map((element, index) => {
      let name = ("isopach" + element.name).replace(/ /g, "");
      // let weight = this.state.hover === name ? 3 : 2;
      return (
      <GeoJSON
        ref={ref => (this.mapElements[element.name] = ref)}
        name={element.name}
        color={element.color}
        fillOpacity={0.2}
        weight={1}
        data={element.JSON}
        onClick={() => this.handlePolyClick(element.name)}
        onMouseOver={() => this.mouseOver(element.name)}
        onMouseOut={() => this.mouseOut()}
      >
      </GeoJSON>
      )
    })

    return (
      <div className="container">
        <Map
          ref={ref => (this.mapElements["myMap"] = ref)}
          zoomSnap={0.5}
          zoomDelta={1}
          center={position}
          zoom={4.5}
        >
        <LayersControl>
          <TileLayer
            url={`https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${"pk.eyJ1Ijoiam5peG9uNTQiLCJhIjoiY2phd3NocXVvMG0ybDMxc2h2bjE4OW00aCJ9.JlOMbwCoyFRMepgsI8pEsQ"}`}
            attribution={
              'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
            }
          />
          <Overlay checked name = "Boundaries">
            <LayerGroup>
              {playBoundaries}
            </LayerGroup>
          </Overlay>
          <Overlay name = "Isopachs">
            <LayerGroup>
              {isopachs}
            </LayerGroup>
          </Overlay>
        </LayersControl>
        </Map>
      </div>
    );
  }
}

export default MapBox;
