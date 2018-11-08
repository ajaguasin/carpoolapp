import React, { Component } from "react";
import Selection from "../../components/selection/Selection";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";
import { Meteor } from "meteor/meteor";
export default class Select extends Component {
  componentDidMount() {
    Meteor.call("rides.deleteRide");
  }
  render() {
    return (
      <div>
        <UsersInfoContext.Consumer>
          {({ allUserInfo, myUserInfo }) => (
            <Selection myUserInfo={myUserInfo} />
          )}
        </UsersInfoContext.Consumer>
      </div>
    );
  }
}
