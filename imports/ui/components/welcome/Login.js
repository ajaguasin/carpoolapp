import React, { Component } from "react";
import "./styles.css";
import AccountsUIWrapper from "../accountsWrapper";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { allUserInfo, loading } = this.props;
    // !loading && console.log(allUserInfo);
    return (
      <div className="app-wrapper">
        <AccountsUIWrapper />
      </div>
    );
  }
}

export default LoginForm;
