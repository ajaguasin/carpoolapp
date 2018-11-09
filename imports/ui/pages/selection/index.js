import React, { Component } from "react";
import Selection from "../../components/selection/Selection";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";
import { Meteor } from "meteor/meteor";
import "./styles";
export default class Select extends Component {
  // componentDidMount() {
  //   Meteor.call("rides.deleteRide");
  // }
  render() {
    return (
      <div class="selection-page">
        <UsersInfoContext.Consumer>
          {({ allUserInfo, myUserInfo }) => (
            <Selection myUserInfo={myUserInfo} />
          )}
        </UsersInfoContext.Consumer>
      </div>
    );
  }
}
