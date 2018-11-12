import React, { Component } from "react";
import Selection from "../../components/selection/Selection";
import { UsersInfoContext } from "../../components/context/UsersInfoProvider";
import { Meteor } from "meteor/meteor";
import "./styles";
import PropTypes from "prop-types";

export default class Select extends Component {
  render() {
    return (
      <div className="selection-page">
        <UsersInfoContext.Consumer>
          {({ allUserInfo, myUserInfo }) => (
            <Selection myUserInfo={myUserInfo} />
          )}
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
