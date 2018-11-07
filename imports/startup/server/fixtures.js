import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../api/usersInfo/usersInfo";

Meteor.startup(() => {
  if (UsersInfo.find().count() === 0) {
    UsersInfo.insert({
      id: "default",
      email: "default",
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
  }
});
