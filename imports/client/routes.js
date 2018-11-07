import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Welcome from "../ui/pages/welcome/index";
import Select from "../ui/pages/selection/index";
import Main from "../ui/pages/main/index";
import Profile from "../../imports/ui/pages/profile";
import { UsersInfoContext } from "../ui/components/context/UsersInfoProvider";
import { Meteor } from "meteor/meteor";

export default () => {
  return (
    <React.Fragment>
      <UsersInfoContext.Consumer>
        {({ myUserInfo }) => {
          if (myUserInfo) {
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
              <Redirect to="/welcome" />
            </Switch>;
          }
        }}
      </UsersInfoContext.Consumer>
    </React.Fragment>
  );
};
