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
      <Menu size="massive" className="ui inverted blue pointing menu">
        {isEmpty(this.props.user) ? (
          <div className="left menu">
            <Menu.Menu position="left">
              <Menu.Item as={NavLink} to="/login" name="Login" />
            </Menu.Menu>
          </div>
        ) : (
          <Fragment>
            <Dropdown item text="Portfolios" size="large">
              <Dropdown.Menu>
                {this.props.user.portfolios.map(p => {
                  return (
                    <Dropdown.Item
                      as={Link}
                      to={`/portfolios/${p.id}`}
                      key={p.id}
                    >
                      {`${p.name}`}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item
              as={NavLink}
              to="/trade"
              activeClassName="active item"
              className="item"
            >
              Trade
            </Menu.Item>

            <Menu.Item
              as={NavLink}
              to="/research"
              activeClassName="active item"
              className="item"
            >
              Research
            </Menu.Item>

            <div className="right menu">
              <div className="item">{this.props.user.first_name}</div>
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
