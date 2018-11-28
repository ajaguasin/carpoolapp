import React, { Component } from "react";
import Selection from "../../components/selection/Selection";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";
import "./styles";
import PropTypes from "prop-types";

export default class Select extends Component {
  render() {
    return (
      <div className="selection-page">
        <UsersInfoContext.Consumer>
          {({ myUserInfo }) => <Selection myUserInfo={myUserInfo} />}
        </UsersInfoContext.Consumer>
      </div>
    );
  }
}

Select.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};
