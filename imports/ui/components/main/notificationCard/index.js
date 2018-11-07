import React, { Component } from "react";
import ProfileCard from "../../profileCard/index";

class NotificationCard extends Component {
  render() {
    return (
      <div>
        <ProfileCard />
        <p>this is the notification card</p>
        <button>Button</button>
        <button>Button </button>
      </div>
    );
  }
}

export default NotificationCard;
