import React, { Fragment, Component } from "react";
import AccountsUIWrapper from "./components/AccountsWrapper";
import Map from "./components/main/Map";
import SimpleMenu from "./components/main/SimpleMenu";
import HomePage from "./pages/welcome";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div>
          <SimpleMenu />
          <HomePage />
        </div>
        <Map />
      </div>
    );
  }
}

export default App;
