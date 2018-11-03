import React from "react";
// import ReactDOM from "react-dom";
// import Input from "@material-ui/core/Input";
// import InputLabel from '@material-ui/core/InputLabel';
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import SimpleMenu from '../menu';


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
      <div className={classes.menuDiv}>
      <SimpleMenu />
      </div>
        <form className={classes.headerInputCntr}>
          <input
            className={classes.input}
            type="text"
            placeholder=" Your Location"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
          />
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

export default withStyles(styles)(Header);
