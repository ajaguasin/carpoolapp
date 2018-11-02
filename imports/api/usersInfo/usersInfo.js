/**
 * This creates the usersInfo collection in Mongo
 */

import { Mongo } from "meteor/mongo";

/**
 *
 * Methods
 *
 */
Meteor.methods({});

export const UsersInfo = new Mongo.Collection("usersInfo");
