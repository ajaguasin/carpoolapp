import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../client/routes";
import { withTracker } from "meteor/react-meteor-data";
import { UsersInfo } from "../api/usersInfo/usersInfo";
import { Meteor } from "meteor/meteor";

const App = props => {
  console.log(props);
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default withTracker(() => {
  Meteor.subscribe("usersInfo");
  return {
    allUserInfo: UsersInfo.find({}).fetch()
  };
})(App);
