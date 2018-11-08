import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

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
    Meteor.call("rides.passengerToggle", myUserInfo);
  };

  render() {
    const { classes, myUserInfo } = this.props;
    myUserInfo && console.log(myUserInfo);
    return (
      <Grid className={classes.buttons}>
        <Typography variant="h1" color="#E3F2FD">
          Are you a:
        </Typography>
        <div>
          <Tooltip title="You drive a passenger going in the same direction">
            <Link to="/main">
              <Button
                onClick={() => this.driverToggle(myUserInfo)}
                variant="contained"
                className={classes.driver}
              >
                Driver
              </Button>
            </Link>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="You carpool with a driver going in the same direction">
            <Link to="/main">
              <Button
                onClick={() => this.passengerToggle(myUserInfo)}
                variant="contained"
                className={classes.passenger}
              >
                Passenger
              </Button>
            </Link>
          </Tooltip>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(SelectButton);
