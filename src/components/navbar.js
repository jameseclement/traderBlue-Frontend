import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { Dropdown, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loggedInUser } from "../redux/actions";
import { isEmpty } from "lodash";
class Navbar extends Component {
  logout = () => {
    //clear LocalStorage
    //update this.state.user = {}
    this.props.loggedInUser({});
    localStorage.removeItem("token");
  };

  render() {
    return (
      <Menu className="ui inverted blue pointing menu">
        {isEmpty(this.props.user) ? (
          <Fragment>
            <Dropdown item text="Portfolios">
              <Dropdown.Menu>
                <Dropdown.Item>Login to View Portfolios</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Trade">
              <Dropdown.Menu>
                <Dropdown.Item>Login to Trade Stocks</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Research">
              <Dropdown.Menu>
                <Dropdown.Item>Login to Research Stocks</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="left menu">
              <Menu.Menu position="left">
                <Menu.Item as={NavLink} to="/login" name="Login" />
              </Menu.Menu>
            </div>
          </Fragment>
        ) : (
          <Fragment>
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
              <div className="item">{this.props.user.username}</div>
              <Menu.Menu position="right">
                <Menu.Item
                  to="/logout"
                  name="Logout"
                  onClick={() => this.logout()}
                />
              </Menu.Menu>
              <div className="item">
                <div className="ui icon input">
                  <SearchBar />
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Menu>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loggedInUser: user => {
      dispatch(loggedInUser(user));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
);

// <NavLink to="/portfolios/1" className="item">
//   <h2 className="ui header">
//     <div className="content">Portfolio</div>
//   </h2>
// </NavLink>
