import React, { Component } from "react";
import Selection from "../../components/selection/Selection";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";
export default class Select extends Component {
  render() {
    return (
      <div>
        <UsersInfoContext.Consumer>
          {({ allUserInfo }) => <Selection allUserInfo={allUserInfo} />}
        </UsersInfoContext.Consumer>
      </div>
    );
  }
}
