import React, { Component, Fragment } from 'react';
import UserGift from './UserGift';
import axios from 'axios';
import moment from 'moment';

export default class User extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      gifts: [],
    };

    this.user = JSON.parse(localStorage.getItem('user'));

    axios.get('http://localhost:3001/gifts', { params: { userId: this.user.id } }).then(({data: gifts}) => {
      this.setState({gifts});
    });
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-2">
            <img src={this.user.image} alt="Image" style={{ width: '100%' }} />
          </div>
          <div className="col-5">
            {this.user.name}
          </div>
          <div className="col-5">
            {moment(this.user.date).format("MMMM D")}
          </div>
        </div>
        <div className="row">
          {this.state.gifts.map((gift) => (
            <UserGift key={gift.id} gift={gift} />
          ))}
        </div>
      </Fragment>
    )
  }
}
