import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../../api/usersInfo/usersInfo";
import { Rides } from "../../../api/rides/rides";
export const UsersInfoContext = React.createContext();

class UsersInfoProvider extends Component {
  render() {
    const {
      allUserInfo,
      myUserInfo,
      loading,
      ridesLoading,
      rides,
      myRide
    } = this.props;
    return (
      <UsersInfoContext.Provider
        value={{
          allUserInfo,
          myUserInfo,
          loading,
          ridesLoading,
          rides,
          myRide
        }}
      >
        {this.props.children}
      </UsersInfoContext.Provider>
    );
  }
}

export default withTracker(() => {
  const handle = Meteor.subscribe("usersInfo");
  const ridesHandle = Meteor.subscribe("rides");

  const ready = handle.ready();
  const ridesReady = ridesHandle.ready();

  const myRide = Rides.find({
    $or: [{ driverId: Meteor.userId() }, { passengerId: Meteor.userId() }]
  }).fetch();

  return {
    loading: !ready,
    ridesLoading: !ridesReady,
    allUserInfo: UsersInfo.find({}).fetch(),
    myUserInfo: UsersInfo.find({ id: Meteor.userId() }).fetch(),
    rides: Rides.find({}).fetch(),
    myRide
  };
})(UsersInfoProvider);
