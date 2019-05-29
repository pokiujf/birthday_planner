import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class AddGift extends Component {
  static propTypes = {
    userId: PropTypes.number.isRequired,
    updateFn: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      url: '',
      text: '',
    };
  }

  updateField = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  };

  submitAddGiftForm= (event) => {
    event.preventDefault();
    axios.post(
      'http://localhost:3001/gifts',
      {
        url: this.state.url,
        text: this.state.text,
        userId: this.props.userId,
      }).then((response) => {
      this.setState({ url: '', text: '' });
      this.props.updateFn();
    });
  }

  render() {
    return (
      <div className="col-4">
        <div className="row">
          <div className="col-12">
            <label htmlFor="url">Url</label>
            <input id='url' name="url" value={this.state.url} onChange={this.updateField} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="text">Text</label>
            <input id='text' name="text" value={this.state.text} onChange={this.updateField} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" onClick={this.submitAddGiftForm}>Add</button>
          </div>
        </div>
      </div>
    )
  }
}
