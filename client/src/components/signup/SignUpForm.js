import React, { PureComponent } from "react";

export default class SignupForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <article class="pa4 black-80">
        <form
          action="sign-up_submit"
          method="get"
          accept-charset="utf-8"
          onSubmit={this.handleSubmit}
        >
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
            <div class="mt3">
              <label class="db fw4 lh-copy f6" for="email-address">
                Email address
              </label>
              <input
                class="pa2 input-reset ba bg-transparent w-100 measure"
                type="email"
                name="email"
                value={this.state.email || ""}
                onChange={this.handleChange}
              />
            </div>

            <div class="mt3">
              <label class="db fw4 lh-copy f6" for="password">
                Password
              </label>

              <input
                class="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                value={this.state.password || ""}
                onChange={this.handleChange}
              />
            </div>
            <div class="mt3">
              <label class="db fw4 lh-copy f6" for="password">
                Confirm Password
              </label>
              <input
                class="b pa2 input-reset ba bg-transparent"
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword || ""}
                onChange={this.handleChange}
              />
            </div>
            {this.state.password &&
              this.state.confirmPassword &&
              this.state.password !== this.state.confirmPassword && (
                <p style={{ color: "red" }}>The passwords do not match!</p>
              )}

            <button
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
            >
              Sign up
            </button>
          </fieldset>
        </form>
      </article>
    );
  }
}
