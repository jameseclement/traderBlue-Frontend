import React, { Component } from "react";
import LoginForm from "../components/loginForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Image } from "semantic-ui-react";

class LoginPage extends Component {
  render() {
    return this.props.loading ? (
      <Grid centered columns={3}>
        <Grid.Column>
          <div class="ui active centered inline loader" />
        </Grid.Column>
      </Grid>
    ) : (
      <Grid centered columns={3}>
        <Grid.Column>
          <LoginForm loggingInUser={this.props.loggingInUser} />
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
