import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Gravatar from "react-gravatar";

class ProfileCard extends Component {
  render() {
    const { classes, user } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.footerMetaWrapper}>
          <React.Fragment>
            <Gravatar
              className={classes.imgprofilecard}
              email={user.email.address}
              default="robohash"
            />
            <div className={classes.profilecardbox}>
              <Typography component="h2" className={classes.profilecardname}>
                Name: {user.profileInformation.fullName}
              </Typography>
              <Typography component="h3" className={classes.profilecardname}>
                Phone: {user.profileInformation.phoneNumber}
              </Typography>
            </div>
          </React.Fragment>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileCard);
