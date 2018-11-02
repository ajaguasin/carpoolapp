import React from "react";
// import ReactDOM from "react-dom";
// import Input from "@material-ui/core/Input";
// import InputLabel from '@material-ui/core/InputLabel';
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import headerstyles from "./headerstyles";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.headerWrapper}>
        <form className={classes.headerInputCntr}>
          {/* <Icon className={`${classes.fas} `} /> */}
          {/* ${classes.fa-map-pin} */}
          <input
            className={classes.input}
            type="text"
            placeholder=" Your Location"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
          />
          {/* <Icon className={`${fas} ${fa - arrow - right}`} /> */}
          <input
            className={classes.input}
            type="text"
            placeholder=" Going To?"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
          />
        </form>
      </div>
    );
  }
}

export default withStyles(headerstyles)(Header);
