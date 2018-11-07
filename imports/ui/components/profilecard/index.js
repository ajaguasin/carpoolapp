import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
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
          {({ myUserInfo, loading }) => (
            console.log('all user vanessa', myUserInfo)
          )}
            {/* <CardHeader
            avatar={
              <Gravatar className={classes.avatar} email={user.email} />
            }
          />
            <img
              src="http://maliconsultoria.com.br/wp-content/uploads/2017/10/avatar-viola.png"
              className={classes.img}
            />
            <div className={classes.footerMeta}>
              <Typography component="h2" className={classes.p}>
                Einer Lim
              </Typography>
              <Typography component="h2" className={classes.p}>
                Email: einer@einer.com
              </Typography>
            </div> */}
          </UsersInfoContext.Consumer>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ProfileCard);
