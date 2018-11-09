import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Gravatar from "react-gravatar";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";

class ProfileCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.footerMetaWrapper}>
          <UsersInfoContext.Consumer>
            {({ allUserInfo }) => {
              return (
                <React.Fragment>
                  <Gravatar
                    className={classes.imgprofilecard}
                    email={allUserInfo[0].email.address}
                    default="robohash"
                  />

                  <div className={classes.profilecardbox}>
                    <Typography
                      component="h2"
                      className={classes.profilecardname}
                    >
                      Name: {allUserInfo[0].profileInformation.fullName}
                    </Typography>
                    <Typography
                      component="h3"
                      className={classes.profilecardname}
                    >
                      Phone: {allUserInfo[0].profileInformation.phoneNumber}
                    </Typography>
                  </div>
                </React.Fragment>
              );
            }}
          </UsersInfoContext.Consumer>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileCard);
