import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SimpleMenu from "../menu";
import landmarks from "../map/marker/landmarks";

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
    navigator.geolocation.getCurrentPosition(success => {
      const myLocation = {
        lat: success.latitude,
        lng: success.longitude
      };
      Meteor.call("usersInfo.getLocation", myLocation);
    });
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
          src='/images/Logo_top.png'
        />
        <form className={classes.headerInputCntr}>
          <div className={classes.currentLocation}>
            <input
              className={classes.input}
              type="text"
              placeholder=" Your Location"
            />
            <button type="button" onClick={() => this.getLocation()}>
              Get Location
            </button>
          </div>
          <select
            className={classes.input}
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
