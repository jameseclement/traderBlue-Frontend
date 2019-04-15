import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
var numeral = require("numeral");

class PortfolioCard extends Component {
  render() {
    return (
      <Card as={NavLink} to={`/portfolios/${this.props.portfolio.id}`}>
        <Card.Content>
          <Card.Header>{this.props.portfolio.name}</Card.Header>
          <Card.Meta>Paper Trading</Card.Meta>
          <Card.Description>
            {numeral(this.props.portfolio.cash).format("$0,0.00")} Available to
            trade
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default PortfolioCard;
