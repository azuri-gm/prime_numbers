import React, { Component } from 'react';
import '../App.css';

export default class LoadingSpinner extends Component {
  render() {
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="loading spinner"
        className="loader"
      />
    );
  }
}
