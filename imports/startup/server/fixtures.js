import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../api/usersInfo/usersInfo";

Meteor.startup(() => {
  if (UsersInfo.find().count() === 0) {
    UsersInfo.insert({
      id: "default",
      driver: false,
      passenger: false,
      currentLocation: {
        long: "",
        lat: ""
      },
      destination: {
        long: "",
        lat: ""
      }
    });
  }
});
