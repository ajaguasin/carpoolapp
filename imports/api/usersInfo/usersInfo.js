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
  "UsersInfo.onClick"() {
    if (driver || passenger === !true) return true;
  },
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


export const UsersInfo = new Mongo.Collection("usersInfo");