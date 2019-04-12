import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { Dropdown, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return !this.props.user.portfolios ? (
      <Menu className="ui inverted blue pointing menu">
        <Dropdown item text="Portfolios">
          <Dropdown.Menu>
            <Dropdown.Item>Portfolios Loading</Dropdown.Item>
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
    ) : (
      <Menu className="ui inverted blue pointing menu">
        <Dropdown item text="Portfolios">
          <Dropdown.Menu>
            {this.props.user.portfolios.map(p => {
              return (
                <Dropdown.Item as={Link} to={`/portfolios/${p.id}`}>
                  {`Portfolio ${p.id}`}
                </Dropdown.Item>
              );
            })}
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

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Navbar)
);

// <NavLink to="/portfolios/1" className="item">
//   <h2 className="ui header">
//     <div className="content">Portfolio</div>
//   </h2>
// </NavLink>
