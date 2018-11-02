import React from "react";
import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import "../imports/client/routes";
import App from "../imports/ui/App";

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("react-target"));
});
