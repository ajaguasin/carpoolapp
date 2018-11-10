import React, { Component } from "react";
import "./styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDoubleRight);

class SideBar extends Component {
  render() {
    const { drawerClickHandler } = this.props;
    return (
      <div className="sidebarwrapper">
        <FontAwesomeIcon
          icon="angle-double-right"
          // onClick={() => drawerClickHandler()}
        />
      </div>
    );
  }
}

export default SideBar;
