import React, { Component } from "react";
import Position from "./position";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { postingPosition } from "../redux/actions";
import { adjustingCash } from "../redux/actions";

class PositionsTable extends Component {
  state = {
    modalOpen1: false,
    modalOpen2: false,
    ticker: "",
    shares: "",
    costBasis: "",
    newCash: 0
  };

  handleOpen1 = () => this.setState({ modalOpen1: true });

  handleClose1 = () => this.setState({ modalOpen1: false });

  handleOpen2 = () => this.setState({ modalOpen2: true });

  handleClose2 = () => this.setState({ modalOpen2: false });

  handleTickerChange = ticker => this.setState({ ticker });
  handleSharesChange = shares => this.setState({ shares });
  handleCostBasisChange = costBasis => this.setState({ costBasis });
  handleCashChange = newCash => this.setState({ newCash });

  handleSave1 = () => {
    this.handleClose1();
    this.props.postingPosition(
      this.state.ticker,
      this.state.shares,
      this.state.costBasis,
      this.props.portfolio.id,
      this.props.user
    );
  };

  handleSave2 = () => {
    this.handleClose2();
    this.props.adjustingCash(
      this.state.newCash,
      this.props.match.params.id,
      this.props.user
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
            <Button onClick={this.handleOpen1}>
              Manually Add Position to Portfolio
            </Button>
          }
          open={this.state.modalOpen1}
          onClose={this.handleClose1}
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
            <Button color="green" onClick={this.handleSave1} inverted>
              <Icon name="checkmark" /> Save
            </Button>
            <Button color="red" onClick={this.handleClose1} inverted>
              <Icon name="x" /> Cancel
            </Button>
          </Modal.Actions>
        </Modal>
        <Modal
          trigger={<Button onClick={this.handleOpen2}>Edit Cash</Button>}
          open={this.state.modalOpen2}
          onClose={this.handleClose2}
          size="small"
        >
          <Header icon="browser" content="Edit Cash" />
          <Modal.Content>
            Cash:
            <input
              onChange={e => this.handleCashChange(e.target.value)}
              type="number"
              value={this.state.newCash}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleSave2} inverted>
              <Icon name="checkmark" /> Save
            </Button>
            <Button color="red" onClick={this.handleClose2} inverted>
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
    postingPosition: (ticker, quantity, price, portfolioId, userId) => {
      dispatch(postingPosition(ticker, quantity, price, portfolioId, userId));
    },
    adjustingCash: (newCash, portfolioId, userId) => {
      dispatch(adjustingCash(newCash, portfolioId, userId));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    portfolio: state.portfolio,
    user: state.user
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PositionsTable)
);
