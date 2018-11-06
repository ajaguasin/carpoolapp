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

  renderDestpin = myUserInfo => {
    console.log(myUserInfo);
    return (
      <Marker
        key="myDestination"
        longitude={myUserInfo[0].destination.long}
        latitude={myUserInfo[0].destination.lat}
      >
        <Pin size={15} myPin={true} />
      </Marker>
    );
  };
  renderCurrpin = myUserInfo => {
    console.log("updated");
    // return (
    //   myUserInfo[0].currentLocation.lat && (
    //     <Marker
    //       key="myLocation"
    //       longitude={myUserInfo[0].currentLocation.long}
    //       latitude={myUserInfo[0].currentLocation.lat}
    //     >
    //       <Pin size={15} myPin={true} current={true} />
    //     </Marker>
    //   )
    // );
  };

  render() {
    const { myUserInfo, classes, loading } = this.props;

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
          {!loading && this.renderDestpin(myUserInfo)}
          {!loading && this.renderCurrpin(myUserInfo)}
        </ReactMapGL>
      </div>
    );
  }
}

export default withStyles(styles)(Map);
