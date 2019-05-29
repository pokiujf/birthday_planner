import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

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

  saveUser = (e) => {
    e.preventDefault();
    let parsedDate = moment(this.state.date, "YYYY-MM-DD");
    if (!parsedDate.isValid()) {
      this.setState(({ errors }) => ({ errors: { ...errors, date: 'Date is invalid' } }));
      return;
    }
    axios.post(
      'http://localhost:3001/users',
      {
        name: this.state.name,
        email: this.state.email,
        date: parsedDate.valueOf(),
        image: this.state.image,
      }
    ).then(() => {
      this.props.history.push('/users')
    });
  };

  updateField = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  };

  render() {
    return (
      <form>
        <div className="row">
          <div className="col-3 offset-2">
            {
              this.state.image
                ? <img src={this.state.image} />
                : 'Placeholder here'
            }

          </div>
          <div className="col-7">
            <div>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                value={this.state.name}
                placeholder="Full name"
                onChange={this.updateField}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                name="email"
                id="email"
                type="email"
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
                onChange={this.updateField}
                required
              />
              {this.state.errors.date && (
                <div style={{color: 'red'}}>{this.state.errors.date}</div>
              )}
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
            <div>
              <button type="submit" onClick={this.saveUser}>Add user</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
