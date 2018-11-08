import React, { Component } from "react";
import ProfileCard from "../../components/profileCard";
import { Meteor } from "meteor/meteor";
import { UsersInfo } from "../../../api/usersInfo/usersInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  profileUpdate(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const number = target.number.value;
    const car = target.car.value;
    console.log(">>>>>", name, number, car);

    Meteor.call("usersInfo.profileUpdate", name, number, car);
  }

  render() {
    const { classes, myUserInfo } = this.props;
    return (
      <div>
        <form onSubmit={e => this.profileUpdate(e)}>
          <label>Your Name</label>
          <input type="text" name="name" />

          <label> Your Phone Number </label>
          <input type="text" name="number" />

          <label> Your Car Model </label>
          <input type="text" name="car" />
          <button type="submit">Submit Your Changes</button>
        </form>
        {/* <ProfileCard /> */}
      </div>
    );
  }
}

export default Profile;
