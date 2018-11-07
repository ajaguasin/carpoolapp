import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../api/usersInfo/usersInfo";

Meteor.startup(() => {
  if (!Meteor.users.find().count) {
    Accounts.createUser(
      {
        email: "j@j.j",
        password: "j"
      },
      user => {
        UsersInfo.insert({
          id: user._id,
          email: user.emails[0],
          driver: false,
          passenger: false,
          currentLocation: {
            long: null,
            lat: null
          },
          destination: {
            long: null,
            lat: null
          },
          partnerStatus: {
            partnerId: null,
            partnerPending: false,
            partnerMatched: false
          }
        });

      }
    );
  }
});
