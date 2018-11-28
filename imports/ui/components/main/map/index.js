import React, { Component } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Pin from "./marker/Pin";
import landmarks from "./marker/data";
import PinPopup from "./marker/PinPopup";
import SideBar from "../../toggleSideBar";
import PropTypes from "prop-types";

const TOKEN =
  "pk.eyJ1IjoiYWphZ3Vhc2luIiwiYSI6ImNqbnllYW5yNTJheDAzcm1vdXFxOHJoMWwifQ.ntYdMe4rfbmQ-7OkbQuBMw";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
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
    return (
      <Marker
        key="myLocation"
        longitude={myUserInfo[0].currentLocation.long}
        latitude={myUserInfo[0].currentLocation.lat}
      >
        <Pin size={15} myPin={true} current={true} />
      </Marker>
    );
  };

  renderPassengers = (allUserInfo, myUserInfo) => {
    let passengers = allUserInfo
      .filter(record => {
        return record.passenger;
      })
      .filter(record => {
        return !record.occupied;
      })
      .filter(passenger => {
        return (
          passenger.destination.lat === myUserInfo[0].destination.lat &&
          passenger.destination.long === myUserInfo[0].destination.long
        );
      })
      .filter(passenger => {
        return (
          passenger.destination.lat !== null &&
          passenger.destination.long !== null
        );
      });
    return passengers.map((passenger, index) => {
      <Marker
        key={index}
        longitude={passenger.currentLocation.long}
        latitude={passenger.currentLocation.lat}
      >
        <Pin size={15} myPin={true} current={true} />
      </Marker>;
    });
  };

  render() {
    const { myUserInfo, classes, loading, allUserInfo } = this.props;
    return (
      <div className={classes.mapContainer}>
        <SideBar />
        <ReactMapGL
          mapboxApiAccessToken={TOKEN}
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          {landmarks
            .filter(landmark => landmark.DD.lng !== null)
            .map((landmark, index) => {
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
          {!loading &&
            myUserInfo[0].destination.long !== null &&
            this.renderDestpin(myUserInfo)}
          {!loading &&
            myUserInfo[0].currentLocation.long !== null &&
            this.renderCurrpin(myUserInfo)}

          {!loading && this.renderPassengers(allUserInfo, myUserInfo)}
        </ReactMapGL>
      </div>
    );
  }
}

Map.propTypes = {
  allUserInfo: PropTypes.array,
  classes: PropTypes.object,
  myUserInfo: PropTypes.array,
  loading: PropTypes.bool
};

export default withStyles(styles)(Map);
