import React, { Component } from "react";
import LoginForm from "../components/loginForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return this.props.loading ? (
      <div>Loading</div>
    ) : (
      <div>
        <LoginForm loggingInUser={this.props.loggingInUser} />
      </div>
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
