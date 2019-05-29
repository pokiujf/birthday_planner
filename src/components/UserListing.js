import React, { Component, Fragment } from 'react';
import UserRow from './UserRow';
import axios from 'axios';

export default class UserListing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users: [],
    };

    axios.get('http://localhost:3001/users').then(({users}) => {
      this.setState({users})
    })
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-2">
            <button>+</button>
          </div>
          <div className="col-3">
            Name
          </div>
          <div className="col-3">
            Date
          </div>
          <div className="col-3 col-offset-1">
            <input name="search" />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            {this.state.users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </div>
          <div className="col-3 col-offset-1">
            <div>Notifications</div>
            Soon something will be here
          </div>
        </div>
      </Fragment>
    )
  }
}
