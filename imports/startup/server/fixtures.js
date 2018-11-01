import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      name: "Brock",
      email: "m@wise.com",
      password: "password",
      driver: false,
      passenger: false,
      driverInfo: {
        currentLocation: {
          long: "",
          lat: ""
        },
        destination: {
          long: "",
          lat: ""
        }
      },
      passengerInfo: {
        currentLocation: {
          long: "",
          lat: ""
        },
        destination: {
          long: "",
          lat: ""
        }
      }
    });
  }
});

if (Meteor.isServer) {
  Meteor.publish("Meteor.users", function usersPublication() {
    return Users.find();
  });
}
