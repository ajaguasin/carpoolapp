import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../usersInfo";
if (Meteor.isServer) {
  Meteor.publish("usersInfo", () => {
    return UsersInfo.find({});
  });
}

Meteor.methods({
  "usersInfo.handleSubmit"() {
    if (UsersInfo.driver || UsersInfo.passenger === true) {
      UsersInfo.update(users._id, {
        $set: {
          currentLocation: {
            long: this.current.value,
            lat: this.current.value
          }
        }
      });
    }
  }
});
