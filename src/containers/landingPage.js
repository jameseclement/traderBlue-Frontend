import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PortfolioCard from "../components/portfolioCard";
import { Card } from "semantic-ui-react";

import { fetchingPortfolio } from "../redux/actions";

class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <h1>Select which portfolio we're working with</h1>
        <Card.Group>
          {this.props.user.portfolios.map(portfolio => {
            return <PortfolioCard key={portfolio.id} portfolio={portfolio} />;
          })}
        </Card.Group>
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
  )(PortfolioPage)
);
