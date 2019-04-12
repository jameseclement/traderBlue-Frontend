import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { Dropdown, Menu } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <Menu className="ui inverted blue pointing menu">
        <Dropdown item text="Portfolios">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/portfolios/1">
              Portfolio 1
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/portfolios/2">
              Portfolio 2
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
      </Menu>
    );
  }
}
export default Navbar;

// <NavLink to="/portfolios/1" className="item">
//   <h2 className="ui header">
//     <div className="content">Portfolio</div>
//   </h2>
// </NavLink>
