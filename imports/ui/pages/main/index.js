import React, { Component } from "react";
import Header from "../../components/main/header";
import Map from "../../components/main/map";

import { UsersInfoContext } from "../../components/context/UsersInfoProvider";

export default class Main extends Component {

  getInitialState = () => {
    return { sidebarOpen: true };
  }

  handleViewSidebar = () => {
    this.setState({ sidebarOpen: this.state.sidebarOpen });
  }

  render() {
    return (
      <div>
        <Header onClick={this.handleViewSidebar} />
        <UsersInfoContext.Consumer>
          {({ allUserInfo, myUserInfo, loading }) => (
            <Map
              allUserInfo={allUserInfo}
              myUserInfo={myUserInfo}
              loading={loading}
            />
          )}
        </UsersInfoContext.Consumer>
      </div>
    );
  }
}
