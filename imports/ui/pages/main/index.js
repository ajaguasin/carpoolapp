import React, { Component } from "react";
import Header from "../../components/main/header";
import Map from "../../components/main/map";
import Footer from "../../components/main/footer";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";

export default class Main extends Component {
  render() {
    return (
      <div>
        <UsersInfoContext.Consumer>
          {({ allUserInfo, myUserInfo, loading, rides, ridesLoading }) => (
            <React.Fragment>
              <Header
                allUserInfo={allUserInfo}
                myUserInfo={myUserInfo}
                rides={rides}
                ridesLoading={ridesLoading}
              />
              <Map
                allUserInfo={allUserInfo}
                myUserInfo={myUserInfo}
                loading={loading}
              />
            </React.Fragment>
          )}
        </UsersInfoContext.Consumer>
        <Footer />
      </div>
    );
  }
}
