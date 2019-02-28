import { Mongo } from "meteor/mongo";
export const UsersInfo = new Mongo.Collection("usersInfo");
// import SimpleSchema from "simpl-schema";
// UsersInfo.schema = new SimpleSchema({
//   id: String,
//   email: String,
//   profileComplete: Boolean,
//   profileInformation: String,
//   profileInformation: {
//     type: Object
//     // fullName: String,
//     // phoneNumber: String,
//     // carModel: String
//   },
//   driver: Boolean,
//   passenger: Boolean,
//   occupied: Boolean,
//   currentLocation: {
//     type: Object
//     // long: { type: Number, required: false },
//     // lat: { type: Number, required: false }
//   },
//   destination: {
//     type: Object
//     // long: { type: Number, required: false },
//     // lat: { type: Number, required: false }
//   },
//   partnerStatus: {
//     type: Object
//     // partnerId: { type: String, required: false },
//     // partnerPending: Boolean,
//     // partnerMatched: Boolean
//   }
// });

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
  "usersInfo.updateOccupied"(passengerId) {
    UsersInfo.update(
      { id: passengerId },
      {
        $set: {
          occupied: true
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
          occupied: false,
          currentLocation: {
            long: "",
            lat: ""
          },
          destination: {
            long: "",
            lat: ""
          },
          partnerStatus: {
            partnerId: null,
            partnerPending: false,
            partnerMatched: false
          }
        }
      }
    );
  },

  "usersInfo.handleSubmit"(coordinates) {
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
      occupied: false,
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
