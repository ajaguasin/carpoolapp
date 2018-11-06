import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import "./styles";
export default class AccountsUIWrapper extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }
  componentWillUnmount() {
    Blaze.remove(this.view); // Clean up Blaze view
  }
  render() {
    return (
      <React.Fragment>
        <h1>click me</h1>
        <span ref="container" />
      </React.Fragment>
    ); // Render a placeholder
  }
}
