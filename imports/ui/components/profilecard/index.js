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
                <div className="myprofileinfo">
                  <Gravatar
                    className={classes.imgprofilecard}
                    email={allUserInfo[0].email.address}
                    default="robohash"
                  />
                  <Typography component="h2" className={classes.p}>
                    {allUserInfo[0].profileInformation.fullName}
                  </Typography>
                </div>
              );
            }}
          </UsersInfoContext.Consumer>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileCard);
