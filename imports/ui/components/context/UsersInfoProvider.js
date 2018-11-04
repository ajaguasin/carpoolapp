import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../../api/usersInfo/usersInfo";

export const UsersInfoContext = React.createContext();

class UsersInfoProvider extends Component {
  render() {
    const { allUserInfo, myUserInfo } = this.props;
    return (
      <UsersInfoContext.Provider value={{ allUserInfo, myUserInfo }}>
        {this.props.children}
      </UsersInfoContext.Provider>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("usersInfo");
  return {
    allUserInfo: UsersInfo.find({}).fetch(),
    myUserInfo: UsersInfo.find({ id: Meteor.userId() }).fetch()
  };
})(UsersInfoProvider);
