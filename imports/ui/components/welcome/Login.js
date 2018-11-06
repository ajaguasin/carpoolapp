import React, { Component } from "react";
import "./styles.css";
import AccountsUIWrapper from "../AccountsWrapper";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  insertInfo(allUserInfo) {
    console.log(allUserInfo);
    if (
      allUserInfo &&
      allUserInfo.filter(e => e.id === Meteor.userId()).length === 0
    ) {
      Meteor.call("usersInfo.insertMethod", Meteor.userId());
    }
  }

  render() {
    const { allUserInfo } = this.props;
    return (
      <div className="app-wrapper">
        {/* <div className="login-wrapper"> */}
        <AccountsUIWrapper />
        {allUserInfo && this.insertInfo(allUserInfo)}
        {/* <button onClick={() => this.insertInfo()}>click</button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default LoginForm;
