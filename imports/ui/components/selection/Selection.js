import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "./styles";

class SelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: false,
      passenger: false
    };
  }
  // componentDidMount = () => {
  //   Meteor.call()
  // }

  // onClick = () => {
  //   Meteor.call('onClick')
  // }

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.buttons}>
        <h2>Are you a:</h2>
        <div>
          <Button variant="contained" className={classes.driver}>
            Driver
          </Button>
          <p>You drive a passenger going in the same direction</p>
        </div>
        <div>
          <Button variant="contained" className={classes.passenger}>
            Passenger
          </Button>
          <p>You carpool with a driver going in the same direction</p>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(SelectButton);
