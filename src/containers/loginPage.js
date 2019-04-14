import React, { Component } from "react";
import LoginForm from "../components/loginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm loggingInUser={this.props.loggingInUser} />
      </div>
    );
  }
}

export default LoginPage;
