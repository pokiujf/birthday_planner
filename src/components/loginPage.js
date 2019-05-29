import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export default class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      errors: {},
    };
    this.user = localStorage.getItem("user")
  }

  submitLoginForm = (event) => {
    event.preventDefault();
    axios.get(
      'http://localhost:3001/users',
      {
        params: {
          email: this.state.email,
        }
      }).then((response) => {
      let foundUser = response.data[0];
      if (foundUser) {
        localStorage.setItem('user', JSON.stringify(foundUser));
        this.setState({ errors: {} });
        this.props.history.push('/')
      } else {
        this.setState({ errors: { email: 'No user for this email' } })
      }
    });
  };

  updateField = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  };

  render() {
    if (this.user) {
      return (
        <Redirect to="/"/>
      )
    }
    return (
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input id='email' name="email" value={this.state.email} onChange={this.updateField} />
          {this.state.errors.email && (
            <div style={{ color: 'red' }}>{this.state.errors.email}</div>
          )}
        </div>
        <button type="submit" onClick={this.submitLoginForm}>Login</button>
      </form>
    );
  }
}
