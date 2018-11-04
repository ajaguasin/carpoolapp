import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../usersInfo";
if (Meteor.isServer) {
  Meteor.publish("usersInfo", () => {
    return UsersInfo.find({});
  });
}
