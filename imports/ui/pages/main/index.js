import React, { Component } from "react";
import Header from "../../components/main/header";
import SideBar from "../../components/toggleSideBar";
import Map from "../../components/main/map";
import "./styles.css";

import { UsersInfoContext } from "../../components/context/UsersInfoProvider";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  drawerToggleHandler = () => {
    this.setState({hidden: !this.state.hidden})
  };

  render() {
    return (
      <div>
         {this.state.hidden && <Header /> }
        <div onClick={() => this.drawerToggleHandler()}>
          <SideBar />
        </div>
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
export default Main;
