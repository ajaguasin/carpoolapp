import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Rides = new Mongo.Collection("rides");

import RideState from "./helpers/RideState";
if (Meteor.isServer) {
  Meteor.publish("rides", () => {
    return Rides.find({});
  });
}
const RideStateObj = new RideState();

Meteor.methods({
  // Gets called when driver picks passenger
  "rides.updateToPending"(passengerId) {
    RideStateObj.setPending(passengerId);
  },

  // Gets called when user selects driver
  "rides.driverToggle"(myUserInfo) {
    Rides.insert({
      owner: myUserInfo[0].id,
      driverId: myUserInfo[0].id,
      passengerId: "",
      rideStates: "initial"
    });
  },
  "rides.updateToMatch"() {
    RideStateObj.setMatched({});
  },

  // Gets called on componentDidMount in Select page
  "rides.deleteRide"() {
    Rides.remove({ owner: this.userId });
  },
  "rides.setInitialFromPending"() {
    RideStateObj.setInitialFromPending();
  }
});

// if (Meteor.isServer) {
//   Meteor.publish("Rides", function ridesPublication() {
//     return Rides.find({});
//   });
// }
