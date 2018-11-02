import React from "react";
import "./footer.css";
// import Gravatar from 'react-gravatar';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className={"footerConfirmation"}>
          <span>You're all set!</span>
          <span role="img" aria-label="stars">
            ✨
          </span>
        </div>
        <p>Your ride details:</p>

        <div className={"footerMetaWrapper"}>
          <img src="http://maliconsultoria.com.br/wp-content/uploads/2017/10/avatar-viola.png" />
          <div className={"footerMeta"}>
            <p>Einer Lim</p>
            <p>Email: einer@einer.com</p>
          </div>
          <button>Cancel Ride</button>
        </div>
      </div>
    );
  }
}

export default Footer;
