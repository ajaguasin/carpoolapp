import { Mongo } from "meteor/mongo";
export const Rides = new Mongo.Collection("rides");

import RideState from "./helpers/RideState";
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

  // Gets called on componentDidMount in Select page
  "rides.deleteRide"() {
    Rides.remove({ owner: this.userId });
  },
  "rides.passengerToggle"(myUserInfo) {
    Rides.update({ passengerId: myUserInfo[0].id });
  }
});

// if (Meteor.isServer) {
//   Meteor.publish("Rides", function ridesPublication() {
//     return Rides.find({});
//   });
// }
