import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

class PortfolioCard extends Component {
  render() {
    return (
      <Card as={NavLink} to={`/portfolios/${this.props.portfolio.id}`}>
        <Card.Content>
          <Card.Header>{this.props.portfolio.name}</Card.Header>
          <Card.Meta>Paper Trading</Card.Meta>
          <Card.Description>Info about this portfolio</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default PortfolioCard;
