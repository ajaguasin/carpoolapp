import React from "react";
import { Route, Switch } from "react-router";
import Welcome from "../ui/pages/welcome/index";
import Select from "../ui/pages/selection/index";
import Main from "../ui/pages/main/index";
import Profile from '../../imports/ui/pages/profile';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/select" component={Select} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
};
