import React from "react";
import ProfileCard from "../../profileCard/index";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footerWrapper}>
   
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
