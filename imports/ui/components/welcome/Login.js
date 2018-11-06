import React, { Component } from "react";
import "./styles.css";
import AccountsUIWrapper from "../AccountsWrapper";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  insertInfo = () => {
    console.log("test");
    let meteorUser = Accounts.userId();
    let userinfoId = this.props.allUserInfo.filter(
      user => user.id === meteorUser
    );

    if (userinfoId.length === 0) {
      Meteor.call("usersInfo.insertMethod", meteorUser);
    }
  };

  componentDidMount() {
    this.insertInfo();
  }

  render() {
    console.log("this is the one", this.props.allUserInfo);
    console.log("userID", Accounts.userId());
    return (
      <div className="app-wrapper">
        {/* <div className="login-wrapper"> */}
        <AccountsUIWrapper />

        {/* <button onClick={() => this.insertInfo()}>click</button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default LoginForm;
