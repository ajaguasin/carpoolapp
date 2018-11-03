import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

const TOKEN =
  "pk.eyJ1IjoiYWphZ3Vhc2luIiwiYSI6ImNqbnllYW5yNTJheDAzcm1vdXFxOHJoMWwifQ.ntYdMe4rfbmQ-7OkbQuBMw";
class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 49.263429,
      longitude: -123.13817,
      zoom: 15
    }
  };

  // componentDidMount() {
  //   const userMarker = new mapboxgl.Marker()
  // .setLngLat([49, -123])
  // .addTo(map);
  // }

  render() {
    console.log("map/index.js props :", this.props);
    const { classes } = this.props;
    return (
      <div className={classes.mapContainer}>
        <ReactMapGL
          mapboxApiAccessToken={TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Map);
