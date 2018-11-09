import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";

class SelectButton extends React.Component {
  constructor(props) {
    super(props);
  }

  driverToggle = myUserInfo => {
    Meteor.call("usersInfo.driverToggle", myUserInfo);
    Meteor.call("rides.driverToggle", myUserInfo);
  };

  passengerToggle = myUserInfo => {
    Meteor.call("usersInfo.passengerToggle", myUserInfo);
  };

  render() {
    const { classes, myUserInfo } = this.props;
    myUserInfo && console.log(myUserInfo);
    return (
      <Grid className={classes.buttons}>
        <Fade in={true} timeout={2000}>
          <Typography className={classes.title}>
            Who are <br /> you?
          </Typography>
        </Fade>
        <div className={classes.selectButtons}>
          <Slide in={true} direction="up" timeout={1000}>
            <Tooltip title="You drive a passenger going in the same direction">
              <Link to="/main">
                <button
                  onClick={() => this.driverToggle(myUserInfo)}
                  variant="contained"
                  className={classes.driver}
                >
                  Driver
                </button>
              </Link>
            </Tooltip>
          </Slide>
          <Slide in={true} direction="up" timeout={1000}>
            <Tooltip title="You carpool with a driver going in the same direction">
              <Link to="/main">
                <button
                  onClick={() => this.passengerToggle(myUserInfo)}
                  variant="contained"
                  className={classes.passenger}
                >
                  Passenger
                </button>
              </Link>
            </Tooltip>
          </Slide>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(SelectButton);
