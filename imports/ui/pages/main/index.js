import React, { Component } from "react";
import Header from "../../components/main/Header";
import SideBar from "../../components/toggleSideBar";
import Map from "../../components/main/Map";
import "./styles.css";
import Slide from "@material-ui/core/Slide";

import { UsersInfoContext } from "../../components/context/UsersInfoProvider";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  drawerToggleHandler = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    return (
      <div>
        {this.state.hidden && (
          <Slide in={true} direction="right" timeout={300}>
            <Header />
          </Slide>
        )}
        <div onClick={() => this.drawerToggleHandler()}>
          <Slide in={true} direction="right" timeout={300}>
            <SideBar />
          </Slide>
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
