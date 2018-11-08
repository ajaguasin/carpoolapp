import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import "./styles";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

library.add(faChevronLeft);

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
    return (
      <div className="profileWrapper">
        {this.props.location.pathname === "/profile" && (
          <Link to="/main">
            <FontAwesomeIcon className="icon" icon="chevron-left" />
          </Link>
        )}
        <div className="profileContent">
          <div className="content">
            <div className="content__container">
              <p className="content__container__text">Hello</p>

              <ul className="content__container__list">
                <li className="content__container__list__item">you !</li>
                {this.props.location.pathname === "/profile" && (
                  <UsersInfoContext.Consumer>
                    {({ myUserInfo }) => (
                      <li className="content__container__list__item">
                        {myUserInfo[0].profileInformation.fullName} !
                      </li>
                    )}
                  </UsersInfoContext.Consumer>
                )}
                {this.props.location.pathname === "/createprofile" && (
                  <li className="content__container__list__item">new user !</li>
                )}
                <li className="content__container__list__item">beautiful !</li>
                <li className="content__container__list__item">
                  to carpooling!
                </li>
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
            <p className="profileparag">
              Please fill out this field if you wish to give rides.
            </p>
            <input type="text" name="car" className="profileFormInput" />
            <button type="submit" className="button">
              SUBMIT
            </button>
          </form>

          <UsersInfoContext.Consumer>
            {({ myUserInfo }) =>
              myUserInfo[0].email && (
                <div className="myprofileinfo">
                  <Gravatar
                    email={myUserInfo[0].email.address}
                    default="robohash"
                    className="avatar"
                  />
                  <div className="infoparag">
                    <p>Name: {myUserInfo[0].profileInformation.fullName}</p>
                    <p>
                      Phone Number:{" "}
                      {myUserInfo[0].profileInformation.phoneNumber}
                    </p>
                    <p>
                      Car Model: {myUserInfo[0].profileInformation.carModel}
                    </p>
                  </div>
                </div>
              )
            }
          </UsersInfoContext.Consumer>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
