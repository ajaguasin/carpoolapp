import { Meteor } from "meteor/meteor";
import { Rides } from "../rides";

if (Meteor.isServer) {
  Meteor.publish("rides", () => {
    return Rides.find({});
  });
}
