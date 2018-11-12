import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";

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
              <Typography className={classes.profilecardname}>
                Name: {user.profileInformation.fullName}
              </Typography>
              <Typography className={classes.profilecardname}>
                Phone: {user.profileInformation.phoneNumber}
              </Typography>

              {user.profileInformation.carModel.length > 0 && (
                <Typography className={classes.profilecardname}>
                  Car: {user.profileInformation.carModel}
                </Typography>
              )}
            </div>
          </React.Fragment>
        </CardContent>
      </Card>
    );
  }
}

ProfileCard.propTypes = {
  users: PropTypes.objectOf({
    profileInformation: PropTypes.objectOf({
      carModel: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      phoneNumber: PropTypes.number.isRequired
    })
  })
};

export default withStyles(styles)(ProfileCard);
