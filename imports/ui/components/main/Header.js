import React from "react";
import "./header.css";
// import ReactDOM from "react-dom";
// import Input from "@material-ui/core/Input";
// import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="header-wrapper">
        <form className="headerInputCntr">
        <Icon className={classNames(classes.icon, 'fas fa-map-pin')} />
          <input
            type="text"
            placeholder=" Your Location"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
          />
          <Icon className={classNames(classes.icon, 'fas fa-arrow-right')} />
          <input
            type="text"
            placeholder=" Going To?"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
          />
        </form>
      </div>
    );
  }
}

export default Header;
