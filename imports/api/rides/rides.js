import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Rides = new Mongo.Collection("rides");

if (Meteor.isServer) {
  Meteor.publish("rides", () => {
    return Rides.find({});
  });
}

Meteor.methods({
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
