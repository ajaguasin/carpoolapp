import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SimpleMenu from "../menu";
import landmarks from "../map/marker/landmarks";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

library.add(faSearchLocation);

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
    this.destSelect = React.createRef();
  }

  handleChange = e => {
    e.preventDefault();
    let location = this.destSelect.current.value;
    console.log(">>>>>>> VANESSA", location);

    let result = landmarks.filter(data => data.name === location);
    console.log(result[0].DD.lng);

    Meteor.call("usersInfo.handleSubmit", result[0].DD);
    console.log("meteor call", result[0].DD);
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

    const watchId = navigator.geolocation.watchPosition(
      success => {
        const myLocation = {
          lat: success.coords.latitude,
          lng: success.coords.longitude
        };
        Meteor.call("usersInfo.getLocation", myLocation);
      },
      err => console.log(err),
      {
        enableHighAccuracy: true,
        distanceFilter: 5
      }
    );

    console.log("watchID: ", watchId);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.headerWrapper}>
        <div className={classes.menuDiv}>
          <SimpleMenu />
        </div>
        <img
          alt="company's logo"
          src="/images/Logo @3x.png"
          className={classes.logo}
        />
        <form className={classes.headerInputCntr}>
          <div className={classes.currentLocation}>
            <input
              className={classes.input}
              type="text"
              placeholder=" Your Location"
            />
            <FontAwesomeIcon
              icon="search-location"
              onClick={() => this.getLocation()}
              className={classes.locationButton}
            />
          </div>
          <select
            className={classes.select}
            onChange={e => this.handleChange(e)}
            ref={this.destSelect}
          >
            <option value>Choose Destination</option>
            {landmarks.map(landmark => (
              <option>{landmark.name}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
