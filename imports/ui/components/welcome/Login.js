import React, { Component } from "react";
import "./styles.css";
import AccountsUIWrapper from "../AccountsWrapper";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  insertInfo(allUserInfo) {
    console.log("inside method", allUserInfo);

    let arr = allUserInfo.filter(e => e.id === Meteor.userId());
    // console.log(arr);
    if (arr.length === 0) {
      Meteor.call("usersInfo.insertMethod", Meteor.userId());
    }
  }

  render() {
    const { allUserInfo, loading } = this.props;
    !loading && console.log(allUserInfo);
    return (
      <div className="app-wrapper">
        {/* <div className="login-wrapper"> */}
        <AccountsUIWrapper />
        {!loading && this.insertInfo(allUserInfo)}
        {/* <button onClick={() => this.insertInfo()}>click</button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default LoginForm;
