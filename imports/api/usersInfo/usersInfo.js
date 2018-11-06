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
  console.log(coordinates)
  UsersInfo.update({id: this.userId}, 
    { $set: {
        driverInfo: {
        currentLocation: {
          long: coordinates.lng,
          lat: coordinates.lat
        }
       }
      }


    })
  }
});

