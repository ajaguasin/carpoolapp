/**
 * This creates the usersInfo collection in Mongo
 */

import { Mongo } from "meteor/mongo";

/**
 *
 * Methods
 *
 */
Meteor.methods({
  "UsersInfo.onClick"() {
    if (driver || passenger === !true) return true;
  }
});

export const UsersInfo = new Mongo.Collection("usersInfo");
