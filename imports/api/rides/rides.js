import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Rides = new Mongo.Collection("rides");

if (Meteor.isServer) {
  Meteor.publish("rides", () => {
    return Rides.find({});
  });
}

Meteor.methods({
  // Gets called when driver picks passenger
  "rides.updateToPending"(passengerId) {
    Rides.update(
      { driverId: Meteor.userId() },
      {
        $set: {
          passengerId: passengerId,
          rideStates: "pending"
        }
      }
    );
  },
  "rides.updateToDone"() {
    Rides.update(
      { passengerId: Meteor.userId() },
      {
        $set: {
          rideStates: "done"
        }
      }
    );
  },
  "rides.updateToCancel"() {
    Rides.update(
      { passengerId: Meteor.userId() },
      {
        $set: {
          rideStates: "cancel"
        }
      }
    );
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
    Rides.update(
      { passengerId: Meteor.userId() },
      { $set: { rideStates: "matched" } }
    );
  },

  // Gets called on componentDidMount in Select page
  "rides.deleteRide"() {
    Rides.remove({ owner: this.userId });
  },
  "rides.setInitialFromPending"() {
    Rides.update(
      { passengerId: Meteor.userId() },
      { $set: { rideStates: "initial", passengerId: "" } }
    );
  }
});

// if (Meteor.isServer) {
//   Meteor.publish("Rides", function ridesPublication() {
//     return Rides.find({});
//   });
// }
