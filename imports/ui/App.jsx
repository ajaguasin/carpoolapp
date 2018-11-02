import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../client/routes";
// import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
// export default withTracker(() => {
//   return {
//     currentUser: Meteor.user(),
//     currentUser: Meteor.userId()
//   };
// })(App);
