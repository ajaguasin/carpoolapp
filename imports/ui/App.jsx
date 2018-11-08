import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../client/routes";
import UsersInfoProvider from "./components/context/UsersInfoProvider";

const App = () => {
  return (
    <UsersInfoProvider>
      <Router>
        <Routes />
      </Router>
    </UsersInfoProvider>
  );
};

export default App;
