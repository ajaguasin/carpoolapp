import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import "./styles.css";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import AccountsUIWrapper from "../AccountsWrapper";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false
    };
  }

  render() {
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
