import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../client/routes";
import RideStateProvider from "./components/context/RideStateProvider";
import UsersInfoProvider from "./components/context/UsersInfoProvider";

const App = () => {
  return (
    <UsersInfoProvider>
      <RideStateProvider>
        <Router>
          <Routes />
        </Router>
      </RideStateProvider>
    </UsersInfoProvider>
  );
};

export default App;
