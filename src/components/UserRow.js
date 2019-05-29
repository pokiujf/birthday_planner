import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import moment from 'moment';

export default class UserRow extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-2">
          <img src={this.props.user.image} />
        </div>
        <div className="col-5">
          <Link to={`/users/${this.props.user.id}`}>{this.props.user.name}</Link>
        </div>
        <div className="col-5">
          {moment(this.props.user.date).format("MMMM D")}
        </div>
      </div>
    )
  }
}
