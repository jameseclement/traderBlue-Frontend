import React, { Component } from "react";
import LoginForm from "../components/loginForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Image, Card } from "semantic-ui-react";

class LoginPage extends Component {
  render() {
    return this.props.loading ? (
      <Grid centered columns={3}>
        <Grid.Column>
          <div class="ui massive active text centered inline loader">
            Loading Portfolios
          </div>
        </Grid.Column>
      </Grid>
    ) : (
      <Grid centered columns={5}>
        <Grid.Column>
          <Grid.Row>
            <Card fluid color="blue">
              <LoginForm loggingInUser={this.props.loggingInUser} />
            </Card>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(LoginPage)
);
