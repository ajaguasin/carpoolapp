/**
 * This creates the usersInfo collection in Mongo
 */

import { Mongo } from "meteor/mongo";
export const UsersInfo = new Mongo.Collection("usersInfo");

/**
 *
 * Methods
 *
 */
Meteor.methods({
  "usersInfo.driverToggle"(myUserInfo) {
    UsersInfo.update(
      { id: this.userId },
      {
        $set: {
          driver: true
        }
      }
    );
  },

  "usersInfo.passengerToggle"() {
    UsersInfo.update(
      { id: this.userId },
      {
        $set: {
          passenger: true
        }
      }
    );
  },

  "usersInfo.handleSubmit"(coordinates) {
    console.log(coordinates);
    UsersInfo.update(
      { id: this.userId },
      {
        $set: {
            destination: {
              long: coordinates.lng,
              lat: coordinates.lat
            }
          }
      }
    );
  },
  "usersInfo.getLocation"(coords) {
    UsersInfo.update(
      { id: this.userId },
      {
        $set: {
          currentLocation: {
            long: coords.lng,
            lat: coords.lat
          }
        }
      }
    );
  },
  "usersInfo.insertMethod"(userId) {
    UsersInfo.insert({
      id: userId,
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

if (Meteor.isServer) {
  Meteor.publish("UsersInfo", function usersPublication() {
    return UsersInfo.find({});
  });
}
