import React from "react";
import { Route, Switch } from "react-router";
import Welcome from "../ui/pages/welcome/index";
import Select from "../ui/pages/selection/index";
import Main from "../ui/pages/main/index";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/select" component={Select} />
      <Route exact path="/main" component={Main} />
    </Switch>
  );
};
