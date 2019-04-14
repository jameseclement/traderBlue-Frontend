import React, { Component } from "react";
import Navbar from "./navbar";

import { Route, Switch, Redirect } from "react-router-dom";
import PortfolioPage from "../containers/portfolioPage";
import TradePage from "../containers/tradePage";
import ResearchPage from "../containers/researchPage";
import LoginPage from "../containers/loginPage";
import NotFound from "../components/notFound";
import "../App.css";
import { isEmpty } from "lodash";
import { loggingInUser, fetchingUser } from "../redux/actions";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      fetch(`http://localhost:3000/api/v1/profile`, {
        headers: {
          Authentication: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log("Token exists, user is: ", data);
          this.props.fetchingUser(data.id);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/portfolios/" />} />
          <Route
            path="/portfolios/:id"
            render={() => {
              return isEmpty(this.props.user) ? (
                <Redirect to="/login" />
              ) : (
                <PortfolioPage user={this.props.user} />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return isEmpty(this.props.user) ? (
                <LoginPage loggingInUser={this.props.loggingInUser} />
              ) : (
                <Redirect to="/portfolios/3" />
              );
            }}
          />

          <Route path="/trade/:id" render={() => <TradePage />} />
          <Route path="/trade" component={TradePage} />
          <Route path="/research" component={ResearchPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loggingInUser: userId => {
      dispatch(loggingInUser(userId));
    },
    fetchingUser: userId => {
      dispatch(fetchingUser(userId));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
