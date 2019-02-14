import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="body">
        <h1>Prime Number Sum Challenge</h1>
        <Input />
      </div>
    );
  }
}

export default App;
