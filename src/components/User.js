import React, { Component, Fragment } from 'react';
import UserGift from './UserGift';
import AddGift from './AddGift';
import axios from 'axios';
import moment from 'moment';
import { Redirect } from "react-router-dom";

export default class User extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      gifts: [],
      user: {},
    };

    this.currentUser = JSON.parse(localStorage.getItem('user'));
    if (this.currentUser.id !== +this.props.match.params.id) {
      axios.get(`http://localhost:3001/users/${this.props.match.params.id}`).then(({ data: user }) => {
        this.setState({ user });

        this.fetchUserGifts();
      });
    }
  }

  fetchUserGifts = () => {
    axios.get('http://localhost:3001/gifts', {
      params: {
        userId: this.state.user.id,
        _order: 'desc',
        _sort: 'id'
      }
    }).then(({ data: gifts }) => {
      this.setState({ gifts });
    });
  };

  render() {
    if (this.currentUser.id === +this.props.match.params.id) {
      return (
        <Redirect to="/users" />
      )
    }
    return (
      <Fragment>
        <div className="row">
          <div className="col-2">
            <img src={this.state.user.image} style={{ width: '100%' }} />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-4">
                {this.state.user.name}
              </div>
              <div className="col-4">
                {moment(this.state.user.date).format("MMMM D")}
              </div>
            </div>
            <div className="row">
              {this.state.user.id && <AddGift userId={this.state.user.id} updateFn={this.fetchUserGifts} />}

              {this.state.gifts.map((gift) => (
                <UserGift key={gift.id} gift={gift} />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
