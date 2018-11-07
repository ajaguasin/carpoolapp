import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../usersInfo";
import { Accounts } from "meteor/accounts-base";

if (Meteor.isServer) {
  Meteor.publish("usersInfo", () => {
    return UsersInfo.find({});
  });

  Accounts.onCreateUser((options, user) => {
    UsersInfo.insert({
      email: user.emails[0],
      id: user._id,
      driver: false,
      passenger: false,
      currentLocation: {
        long: null,
        lat: null
      },
      destination: {
        long: null,
        lat: null
      }
    });
    return user;
  });
}
