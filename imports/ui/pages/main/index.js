import React, { Component } from "react";
import Header from "../../components/main/header";
import Map from "../../components/main/map";
import Footer from "../../components/main/footer";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <UsersInfoContext.Consumer>
          {({ allUserInfo }) => <Map allUserInfo={allUserInfo} />}
        </UsersInfoContext.Consumer>
        <Footer />
      </div>
    );
  }
}
