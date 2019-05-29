import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserGift extends Component {
  static propTypes = {
    gift: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <div className="col-4">
        {this.props.gift.url && (
          <div><img src={this.props.gift.url} style={{ width: '100%' }} /></div>
        )}
        {this.props.gift.text && <div className="gift-name">{this.props.gift.text}</div>}
      </div>
    )
  }
}
