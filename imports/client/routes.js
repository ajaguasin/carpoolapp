import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Welcome from "../ui/pages/welcome/index";
import Select from "../ui/pages/selection/index";
import Main from "../ui/pages/main/index";
import Profile from "../../imports/ui/pages/profile";
import { UsersInfoContext } from "../ui/components/context/UsersInfoProvider";
<<<<<<< HEAD
=======
import { UsersInfo } from "../api/usersInfo/usersInfo";
>>>>>>> 4d35f76f7edd2487f527df15bb4a59895bb156c6

export default () => {
  return (
    <React.Fragment>
      <UsersInfoContext.Consumer>
        {({ allUserInfo, myUserInfo, loading }) => {
          if (!loading && myUserInfo) {
            console.log(myUserInfo);
            return (
              <Switch>
                <Route exact path="/select" component={Select} />
                <Route exact path="/main" component={Main} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/welcome" component={Welcome} />
                <Redirect from="*" to="/select" />
              </Switch>
            );
          } else {
            <Switch>
              <Route exact path="/welcome" component={Welcome} />
            </Switch>;
          }
        }}
      </UsersInfoContext.Consumer>
    </React.Fragment>
  );
};
