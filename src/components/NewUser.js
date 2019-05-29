import React, { Component } from 'react';

export default class NewUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      email: '',
      date: '',
      image: '',
      errors: {},
    };
  }

  updateField = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  };

  render() {
    return (
      <div className="row">
        <div className="col-3 offset-2">

        </div>
        <div className="col-7">
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              value={this.state.name}
              placeholder="Full
              name"
              onChange={this.updateField}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.updateField}
            />
          </div>
          <div>
            <label htmlFor="date">Date in format (1999-12-31)</label>
            <input
              name="date"
              id="date"
              value={this.state.date}
              placeholder="Date of birth YYYY-MM-DD"
              onChange={this.updateField} />
          </div>
          <div>
            <label htmlFor="image">Image URL</label>
            <input
              name="image"
              id="image"
              value={this.state.image}
              placeholder="Image url"
              onChange={this.updateField}
            />
          </div>
        </div>
      </div>

    );
  }
}
