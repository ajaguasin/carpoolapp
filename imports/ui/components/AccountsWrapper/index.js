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
    this.view = Blaze.render(
      Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <img src="/images/Logo-Front-page@3x.png" className="frontLogo" />

          <div className="arrow bounce">
            <a className="icon" href="#" />
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <span ref="container" />
        </div>
      </React.Fragment>
    );
  }
}
