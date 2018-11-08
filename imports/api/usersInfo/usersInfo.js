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

  "usersInfo.resetStatus"() {
    UsersInfo.update(
      { id: this.userId },
      {
        $set: {
          driver: false,
          passenger: false,
          currentLocation: {
            long: "",
            lat: ""
          },
          destination: {
            long: "",
            lat: ""
          }
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

  "usersInfo.insertMethod"(userId, email) {
    UsersInfo.insert({
      id: userId,
      email: email.address,
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

  "usersInfo.profileUpdate"(name, number, car) {
    console.log(name, number, car);
    console.log(this.userId);
    UsersInfo.update(
      { id: this.userId },
      {
        $set: {
          profileComplete: true,
          profileInformation: {
            fullName: name,
            phoneNumber: number,
            carModel: car
          }
        }
      }
    );
  }
});

if (Meteor.isServer) {
  Meteor.publish("UsersInfo", function usersPublication() {
    return UsersInfo.find({});
  });
}
