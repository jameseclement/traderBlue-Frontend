import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PortfolioCard from "../components/portfolioCard";
import { Card, Grid } from "semantic-ui-react";
// import { isEmpty } from "lodash";

import { fetchingPortfolio } from "../redux/actions";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="ui blue header">Select Portfolio</h1>
        <Grid centered columns={5}>
          <Grid.Column>
            {this.props.user.portfolios.map(portfolio => {
              return (
                <PortfolioCard
                  key={portfolio.id}
                  portfolio={portfolio}
                  user={this.props.user}
                />
              );
            })}
          </Grid.Column>
          <Card.Group />
        </Grid>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingPortfolio: (portfolioId, userId) => {
      dispatch(fetchingPortfolio(portfolioId, userId));
    }
  };
};

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)
);
