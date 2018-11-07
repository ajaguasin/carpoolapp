import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SimpleMenu from "../menu";
import landmarks from "../map/marker/data";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import PassengerList from "../PassengerList";
import NotificationCard from "../notificationCard/index";

library.add(faSearchLocation, faMapMarkedAlt);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.destSelect = React.createRef();
  }

  handleChange = e => {
    e.preventDefault();
    let location = this.destSelect.current.value;

    let result = landmarks.filter(data => data.name === location);

    Meteor.call("usersInfo.handleSubmit", result[0].DD);
  };

  getLocation = () => {
    // navigator.geolocation.getCurrentPosition(success => {
    //   console.log(success);
    //   const myLocation = {
    //     lat: success.coords.latitude,
    //     lng: success.coords.longitude
    //   };
    //   Meteor.call("usersInfo.getLocation", myLocation);
    // });

    navigator.geolocation.watchPosition(
      success => {
        const myLocation = {
          lat: success.coords.latitude,
          lng: success.coords.longitude
        };
        Meteor.call("usersInfo.getLocation", myLocation);
      },
      err => console.log(err),
      {
        enableHighAccuracy: true
      }
    );
  };

  render() {
    const { classes, allUserInfo, myUserInfo, loading } = this.props;
    return (
      <div className={classes.headerWrapper}>
        <SimpleMenu />
        <img
          alt="company's logo"
          src="/images/Logo @3x.png"
          className={classes.logo}
        />

        <form className={classes.headerInputCntr}>
          <div className={classes.currentLocation}>
            <FontAwesomeIcon
              icon="search-location"
              onClick={() => this.getLocation()}
              className={classes.locationButton}
            />
            <button
              className={classes.input}
              onClick={() => this.getLocation()}
            >
              Use My Current location
            </button>
          </div>

          <div className={classes.currentLocation}>
            <FontAwesomeIcon
              icon="map-marked-alt"
              className={classes.locationButton}
            />
            <select
              className={classes.select}
              onChange={e => this.handleChange(e)}
              ref={this.destSelect}
            >
              <option>Choose Destination</option>
              {landmarks.map((landmark, index) => (
                <option key={index}>{landmark.name}</option>
              ))}
            </select>
          </div>
        </form>

        <div className={classes.menuDiv} />
        <PassengerList
          allUserInfo={allUserInfo}
          myUserInfo={myUserInfo}
          loading={loading}
        />
        <div>
          <NotificationCard />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
