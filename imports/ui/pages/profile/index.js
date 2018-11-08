import React, { Component } from "react";
import ProfileCard from "../../components/profileCard";
import { Meteor } from "meteor/meteor";
import "./styles";

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

    Meteor.call("usersInfo.profileUpdate", name, number, car);
    target.name.value = "";
    target.number.value = "";
    target.car.value = "";
  }

  render() {
    const { myUserInfo } = this.props;
    return (
      <div className="profileWrapper">
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">Hello</p>

            <ul className="content__container__list">
              <li className="content__container__list__item">you !</li>
              <li className="content__container__list__item">Einer !</li>
              <li className="content__container__list__item">beautiful !</li>
              <li className="content__container__list__item">to carpooling!</li>
            </ul>
          </div>
        </div>

        <form onSubmit={e => this.profileUpdate(e)} className="profileForm">
          <img
            alt="company's logo"
            src="/images/Logo @3x.png"
            className="logo"
          />
          <label className="profileFormLabel">Your Name</label>
          <input type="text" name="name" className="profileFormInput" />

          <label className="profileFormLabel"> Your Phone Number </label>
          <input type="text" name="number" className="profileFormInput" />

          <label className="profileFormLabel"> Your Car Model </label>
          <input type="text" name="car" className="profileFormInput" />
          <button type="submit" className="button">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;
