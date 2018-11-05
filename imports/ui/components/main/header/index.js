import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SimpleMenu from "../menu";
import landmarks from "../map/marker/landmarks";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.destSelect = React.createRef();
  }

  handleChange = e => {
    e.preventDefault();
    let location = this.destSelect.current.value;
    console.log(">>>>>>> VANESSA", location);

    let result = landmarks.filter(data => data.name === location);
    console.log(result[0].DD);

    if (location.value) {
      Meteor.call("usersInfo.handleSubmit", result[0].DD);
      location.value = "";
    }
  };

  render() {
    const { classes } = this.props;
    ("");
    return (
      <div className={classes.headerWrapper}>
        <div className={classes.menuDiv}>
          <SimpleMenu />
        </div>

        <form className={classes.headerInputCntr}>
          <input
            className={classes.input}
            type="text"
            placeholder=" Your Location"
          />
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
