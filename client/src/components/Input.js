import axios from 'axios';
import React, { Component } from 'react';
import LoadingSpinner from './LoadingSpinner';

export default class Input extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      value: 0,
      sum: 0,
      error: '',
      loading: false
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    const { value } = this.state;
    this.setState({ loading: true }, () => {
      axios
        .get(`/api?maxNumber=${value}`)
        .then(sum => {
          this.setState({
            loading: false,
            sum: sum.data.sum
          });
        })
        .catch(err => {
          this.setState({
            loading: false,
            error: String(err)
          });
        });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4">
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Enter the value..."
              className="input_text"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <button
              type="button"
              onClick={this.handleClick}
              className="btn btn-primary"
            >
              get sum
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8">
            {this.state.loading ? (
              <LoadingSpinner />
            ) : (
              <h1>{this.state.sum}</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}
