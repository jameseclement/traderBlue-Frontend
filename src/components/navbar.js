import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/searchBar";

class Navbar extends Component {
  render() {
    return (
      <div className="ui inverted blue pointing menu">
        <NavLink to="/portfolios/1" className="item">
          <h2 className="ui header">
            <div className="content">Portfolio</div>
          </h2>
        </NavLink>
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
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
