import React, { Component } from "react";
import Position from "./position";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { postingPosition } from "../redux/actions";

class PositionsTable extends Component {
  state = {
    modalOpen: false,
    ticker: "",
    shares: "",
    costBasis: ""
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleTickerChange = ticker => this.setState({ ticker });
  handleSharesChange = shares => this.setState({ shares });
  handleCostBasisChange = costBasis => this.setState({ costBasis });

  handleSave = () => {
    this.handleClose();
    this.props.postingPosition(
      this.state.ticker,
      this.state.shares,
      this.state.costBasis,
      1
    );
  };

  render() {
    return !this.props.portfolio.positions ? (
      <div>Loading Positions </div>
    ) : (
      <div>
        <table className="ui selectable table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Shares</th>
              <th>Current Price</th>
              <th>Cost Basis</th>
              <th>Total Value</th>
              <th>Total Cost</th>
              <th>$ G/L Day</th>
              <th>% G/L Day</th>
              <th>$ G/L Total</th>
              <th>% G/L Total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.portfolio.positions.map(position => {
              return <Position key={position.id} position={position} />;
            })}
          </tbody>
        </table>
        <Modal
          trigger={
            <Button onClick={this.handleOpen}>
              Manually Add Position to Portfolio
            </Button>
          }
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size="small"
        >
          <Header icon="browser" content="Add New Position" />
          <Modal.Content>
            Ticker
            <input
              onChange={e =>
                this.handleTickerChange(e.target.value.toUpperCase())
              }
              type="text"
              value={this.state.ticker}
            />
            Shares
            <input
              onChange={e => this.handleSharesChange(e.target.value)}
              type="number"
              value={this.state.shares}
            />
            Cost Basis $
            <input
              onChange={e => this.handleCostBasisChange(e.target.value)}
              type="number"
              value={this.state.costBasis}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleSave} inverted>
              <Icon name="checkmark" /> Save
            </Button>
            <Button color="red" onClick={this.handleClose} inverted>
              <Icon name="x" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postingPosition: (ticker, quantity, price, portfolio_id) => {
      dispatch(postingPosition(ticker, quantity, price, portfolio_id));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    portfolio: state.portfolio
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PositionsTable)
);
