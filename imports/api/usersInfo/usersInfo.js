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
  },
  "usersInfo.insertMethod"(userId) {
    UsersInfo.insert({
      id: userId,
      driver: false,
      passenger: false
    });
  }
});

if (Meteor.isServer) {
  Meteor.publish("UsersInfo", function usersPublication() {
    return UsersInfo.find({});
  });
}
