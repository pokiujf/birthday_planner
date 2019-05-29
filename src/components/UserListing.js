import React, { Component, Fragment } from 'react';
import UserRow from './UserRow';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class UserListing extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    axios.get('http://localhost:3001/users', {
      params: { "id_ne": currentUser.id }
    }).then(({ data: users }) => {
      this.setState({ users })
    });
  }

  logout = () => {
    localStorage.removeItem('user');
    this.props.history.push('/login')
  };

  render() {
    return (
      <Fragment>
        <div className="row table-header">
          <div className="col-7">
            <div className="row">
              <div className="col-2">
                <div className="plus-btn-wrapper">
                  <button type="button" className="btn btn-outline-secondary" style={{width: '100%'}}><Link to="/users/new">Add +</Link></button>
                </div>
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
            <div>
              <button onClick={this.logout} style={{'margin-bottom': '10px'}}>Logout</button>
            </div>
            <div className="form-search">
              <input type="search" placeholder="Search..." name="search" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            {this.state.users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}
