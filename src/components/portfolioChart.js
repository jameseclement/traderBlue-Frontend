import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
var PieChart = require("react-chartjs").Pie;

class PortfolioChart extends Component {
  render() {
    if (!!this.props.portfolio.positions) {
      let values = this.props.portfolio.positions.map(p => {
        return p.info.quote.latestPrice * p.quantity;
      });

      let data = [
        {
          value: values[0],
          color: "#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: values[1],
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: values[2],
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: values[3],
          color: "Green",
          highlight: "#FFC870",
          label: "Green"
        }
      ];
      return !!this.props.portfolio ? (
        <PieChart data={data} />
      ) : (
        <div>Loading</div>
      );
    } else {
      return <div>Loading</div>;
    }
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
