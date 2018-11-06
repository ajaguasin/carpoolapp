import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../../api/usersInfo/usersInfo";

export const UsersInfoContext = React.createContext();

class UsersInfoProvider extends Component {
  render() {
    const { allUserInfo, myUserInfo, loading } = this.props;
    return (
      <UsersInfoContext.Provider value={{ allUserInfo, myUserInfo, loading }}>
        {this.props.children}
      </UsersInfoContext.Provider>
    );
  }
}

export default withTracker(() => {
  const handle = Meteor.subscribe("usersInfo");
  const ready = handle.ready();
  return {
    loading: !ready,
    allUserInfo: UsersInfo.find({}).fetch(),
    myUserInfo: UsersInfo.find({ id: Meteor.userId() }).fetch()
  };
})(UsersInfoProvider);
