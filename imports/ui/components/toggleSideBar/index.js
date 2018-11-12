import React, { Component } from "react";
import "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Slide from "@material-ui/core/Slide";

library.add(faAngleDoubleRight);

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      headerOn: true
    };
  }

  changePosition() {
    this.setState({ headerOn: !this.state.headerOn });
  }

  render() {
    let btn_class = this.state.headerOn ? "headeron" : "headeroff";
    const { drawerClickHandler } = this.props;
    return (
      <div className={btn_class} onClick={this.changePosition.bind(this)}>
        <FontAwesomeIcon icon="angle-double-right" className="toggleicon" />
      </div>
    );
  }
}

export default SideBar;
