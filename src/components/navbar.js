import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="ui inverted teal menu">
        <Link to="/portfolio" className="item">
          <h2 className="ui header">
            <div className="content">Portfolio</div>
          </h2>
        </Link>
        <NavLink to="/trade" activeClassName="active item" className="item">
          <h3 className="ui header">Trade</h3>
        </NavLink>
        <NavLink
          exact
          to="/research"
          activeClassName="active item"
          className="item"
        >
          <h3 className="ui header">Research</h3>
        </NavLink>
      </div>
    );
  }
}
export default Navbar;
