import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div>
      </div>
    )
  }
}
