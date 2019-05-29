import React, { Component, Fragment } from 'react';
import UserRow from './UserRow';
import axios from 'axios';

export default class UserListing extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users: [],
    };

    axios.get('http://localhost:3001/users', { params: { "id_ne": 1 } }).then(({ data: users }) => {
      this.setState({ users })
    });
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-7">
            <div className="row">
              <div className="col-2">
                <button>+</button>
              </div>
              <div className="col-5">
                Name
              </div>
              <div className="col-5">
                Date
              </div>
            </div>
          </div>
          <div className="col-3 offset-2">
            <input name="search" />
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            {this.state.users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </div>
          <div className="col-3 offset-2">
            <div>Notifications</div>
            Soon something will be here
          </div>
        </div>
      </Fragment>
    )
  }
}
