import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

class LoginForm extends Component {
  render() {
    return (
      <Form size="small">
        <Segment>
          <Form.Input icon="user" iconPosition="left" placeholder="Username" />
          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="Blue" size="small">
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default LoginForm;
