import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../api/usersInfo/usersInfo";

Meteor.startup(() => {
  if (UsersInfo.find().count() === 0) {
    UsersInfo.insert({
      id: "default",
      email: "default",
      driver: false,
      passenger: true,
      currentLocation: {
        long: -123.1145,
        lat: 49.2628
      },
      destination: {
        long: -123.118337,
        lat: 49.231989
      }
    });
  }
});
