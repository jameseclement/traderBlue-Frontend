import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="ui inverted teal menu">
        <NavLink to="/users/1/portfolios/1" className="item">
          <h2 className="ui header">
            <div className="content">Portfolio</div>
          </h2>
        </NavLink>
        <NavLink
          to="/users/1/trade"
          activeClassName="active item"
          className="item"
        >
          <h3 className="ui header">Trade</h3>
        </NavLink>
        <NavLink
          exact
          to="/users/1/research"
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
