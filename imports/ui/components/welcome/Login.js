import React, { Component } from "react";
import "./styles.css";
import AccountsUIWrapper from "../AccountsWrapper";
import PropTypes from "prop-types";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-wrapper">
        <AccountsUIWrapper />
      </div>
    );
  }
}

LoginForm.propTypes = {
  allUserInfo: PropTypes.array
};

export default LoginForm;
