import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      showPassword: false
    };
  }

  submitForm(form) {
    console.log("submitting", form.getState().values);
    !form.invalid && form.reset();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Form
          onSubmit={(e, form) => this.submitForm(form)}
          render={({ handleSubmit, invalid, pristine }) => (
            <form onSubmit={e => handleSubmit(e)}>
              <fieldset className={classes.Form}>
                <div className={classes.Username}>
                  <label for="Username">
                    UserName:{" "}
                    <Field
                      name="Username"
                      render={({ input, meta }) => (
                        <input
                          id="Username"
                          name="Username"
                          type="text"
                          placeholder="Username"
                          {...input}
                        />
                      )}
                    />
                  </label>
                </div>
                <label htmlFor="Password" className={classes.Password}>
                  Password:{" "}
                  <Field
                    className={classes.PasswordDiv}
                    name="Password"
                    render={({ input, meta }) => (
                      <input
                        id="Password"
                        name="Password"
                        type={this.state.showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...input}
                      />
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      this.setState({
                        showPassword: !this.state.showPassword
                      });
                    }}
                  >
                    👁
                  </button>
                </label>
                <button
                  className={classes.ButtonDiv}
                  className={classes.submitButton}
                  id="submit"
                  type="submit"
                  disabled={pristine || invalid}
                >
                  LOG IN
                </button>
              </fieldset>
            </form>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
