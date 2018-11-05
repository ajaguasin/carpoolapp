import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SimpleMenu from "../menu";
import landmarks from "../map/marker/landmarks";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.textInput = React.createRef();
  }

  // handleChange = e => {
  //   this.setState({
  //     [e.target.currentLocation.lat]: e.target.value
  //   });
  // };

  // onSubmit = e => {
  //   e.preventDefault();
  //   const form = {
  //     name: this.state.currentLocation.lat,
  //     email: this.state.currentLocation.long
  //   };
  //   database.push(form);
  //   this.setState({
  //     lat: "",
  //     long: ""
  //   });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   let location = this.textInput.current.value;
  //   console.log(location);

  //   if (location.value) {
  //     Meteor.call("usersInfo.handleSubmit");
  //     location.value = "";
  //   }
  // };

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.setState({ value: this.element.value });
  // }

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
            onChange={e => this.handleChange(e)}
          />
          <select className={classes.input}>
            <option selected disabled>
              Choose Destination
            </option>
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
