import React from "react";

// import Gravatar from 'react-gravatar';
import { withStyles } from "@material-ui/core/styles";
import styles from './styles';

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footerWrapper}>
        <div className={classes.footerConfirmation}>
          <span>You're all set!</span>
          <span role="img" aria-label="stars">
            ✨
          </span>
        </div>
        <p>Your ride details:</p>

        <div className={classes.footerMetaWrapper}>
          <img src="http://maliconsultoria.com.br/wp-content/uploads/2017/10/avatar-viola.png" 
          className={classes.img}/>
          <div className={classes.footerMeta}>
            <p>Einer Lim</p>
            <p>Email: einer@einer.com</p>
          </div>
          <button className={classes.button}>Cancel Ride</button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
