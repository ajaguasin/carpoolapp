import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Template } from "meteor/templating";
import { Blaze } from "meteor/blaze";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowDown);

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
        <div class="container">
          <img src="/images/Logo-Front-page.png" />

          <div class="arrow bounce">
            <a class="icon" href="#" />
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <span ref="container" />
        </div>
      </React.Fragment>
    ); // Render a placeholder
  }
}
