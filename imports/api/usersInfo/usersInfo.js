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
  "usersInfo.handleSubmit"(coordinates) {
      UsersInfo.update({id: users._id}, {
        $set: {
          driverInfo: {
          currentLocation: {
            long: coordinates.lng
          }
        }}
      });
    
  }
});
