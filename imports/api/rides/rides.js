import { Mongo } from "meteor/mongo";
export const Rides = new Mongo.Collection("rides");

import RideState from "./helpers/RideState";
const RideStateObj = new RideState();

Meteor.methods({
  "rides.updateToPending"(passengerId) {
    RideStateObj.setPending(passengerId);
  },

  "rides.driverToggle"(myUserInfo) {
    console.log(myUserInfo);
    Rides.update(
      { owner: myUserInfo[0].id },
      { $set: { driverId: myUserInfo[0].id } }
    );
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
