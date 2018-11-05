/**
 * This creates the usersInfo collection in Mongo
 */

import { Mongo } from "meteor/mongo";
export const UsersInfo = new Mongo.Collection("usersInfo");

export default () => {
  Meteor.methods({
    "UsersInfo.insertMethod"(userId) {
      let length = UsersInfo.find({ "UsersInfo._id": userId }).count();
      if (length > 0) {
        throw new Meteor.Error("errrrroooor");
      }
      usersInfo.update({
        id: this.userId,
        driver: false,
        passenger: false
      });
    }
  });
};

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
  }
});

if (Meteor.isServer) {
  Meteor.publish("UsersInfo", function usersPublication() {
    return UsersInfo.find({});
  });
}
