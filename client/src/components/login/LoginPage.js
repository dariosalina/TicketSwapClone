import React, { PureComponent } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions/signup";
import { Redirect } from "react-router-dom";

class LoginPage extends PureComponent {
  handleSubmit = data => {
    this.props.login(data.email, data.password);
    // location.href = "/events";
  };

  render() {
    if (this.props.currentUser) return <Redirect to="/events" />;

    return (
      <div>
        <h1>Login</h1>

        <LoginForm onSubmit={this.handleSubmit} />

        {this.props.error && (
          <span style={{ color: "red" }}>{this.props.error}</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    currentUser: state.currentUser,
    error: state.login.error
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);