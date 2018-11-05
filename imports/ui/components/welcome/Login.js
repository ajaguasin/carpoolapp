import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import "./styles.css";
import AccountsUIWrapper from "../AccountsWrapper";
import { UsersInfo } from "../../../api/usersInfo/usersInfo";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  // insertInfo = () => {
  //   let meteorUser = Accounts.userId();
  //   let userinfo = UsersInfo._connection._userId;
  //   if (meteorUser == !userinfo) {
  //     Meteor.call("UsersInfo.insertMethod");
  //   }
  // };

  render() {
    console.log(this.props.allUserInfo);
    console.log("userID", Accounts.userId());
    return (
      <div className="app-wrapper">
        <div className="login-wrapper">
          <AccountsUIWrapper />
        </div>
      </div>
    );
  }
}

export default LoginForm;
