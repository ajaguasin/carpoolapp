import React, { Fragment } from "react";
import AccountsUIWrapper from "./components/AccountsWrapper";
import Map from "./components/main/Map";
import SimpleMenu from "./components/main/SimpleMenu";

const App = () => (
  <div className="app-wrapper">
    {/* <div className="login-wrapper">
      <AccountsUIWrapper />
    </div> */}

    <SimpleMenu />
    <div>
      <h1>Welcome to Meteor!</h1>
      <p>PHINCHIK</p>
    </div>
    <Map />
  </div>
);

export default App;
