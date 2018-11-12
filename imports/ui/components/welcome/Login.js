import React, { Component } from "react";
import "./styles.css";
import AccountsUIWrapper from "../accountsWrapper";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { allUserInfo, loading } = this.props;
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
