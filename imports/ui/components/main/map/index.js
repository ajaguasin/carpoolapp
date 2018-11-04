import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Pin from "./marker/Pin";
import landmarks from "./marker/landmarks";
import PinPopup from "./marker/PinPopup";

const TOKEN =
  "pk.eyJ1IjoiYWphZ3Vhc2luIiwiYSI6ImNqbnllYW5yNTJheDAzcm1vdXFxOHJoMWwifQ.ntYdMe4rfbmQ-7OkbQuBMw";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        longitude: -123.13817,
        latitude: 49.263429,
        zoom: 11
      },
      showpopup: false,
      filterName: null
    };
  }

  renderPopup = () => {
    const { showpopup, filterName } = this.state;
    const landmark = landmarks.filter(l => l.name === filterName);

    return (
      showpopup && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={landmark[0].DD.lng}
          latitude={landmark[0].DD.lat}
          onClose={() => this.setState({ showpopup: false })}
        >
          <PinPopup city={filterName} />
        </Popup>
      )
    );
  };

  renderMypin = () => {
    const { myUserInfo } = this.props;
    console.log(myUserInfo[0]);
    return true;
    // <Marker longitude={myUserInfo[0].lng} latitude={myUserInfo[0].lat}>
    //   <Pin size={15} />
    // </Marker>
  };

  render() {
    const { myUserInfo } = this.props;

    console.log("map/index.js props :", this.props);
    console.log(myUserInfo);
    const { classes } = this.props;
    return (
      <div className={classes.mapContainer}>
        <ReactMapGL
          mapboxApiAccessToken={TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {landmarks.map((landmark, index) => {
            return (
              <Marker
                key={index}
                longitude={landmark.DD.lng}
                latitude={landmark.DD.lat}
              >
                <Pin
                  size={15}
                  onClick={() =>
                    this.setState({
                      filterName: landmark.name,
                      showpopup: true
                    })
                  }
                />
              </Marker>
            );
          })}
          {this.renderPopup()}
          {this.renderMypin()}
        </ReactMapGL>
      </div>
    );
  }
}

export default withStyles(styles)(Map);
