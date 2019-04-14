import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
var PieChart = require("react-chartjs").Pie;
var data = [
  {
    value: 300,
    color: "#F7464A",
    highlight: "#FF5A5E",
    label: "Red"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "Green"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "Yellow"
  },
  {
    value: 4,
    color: "Green",
    highlight: "#FFC870",
    label: "Green"
  }
];
class PortfolioChart extends Component {
  render() {
    return <PieChart data={data} />;
  }
}

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(PortfolioChart)
);
