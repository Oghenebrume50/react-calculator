import React, { Component } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/app.css';

import calculate from '../logic/calculate';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      next: null,
      total: null,
      operation: null
    }
  }

  clickHandler = (buttonName) => {
    this.setState({next: buttonName});
    calculate(this.state, buttonName);
  }

  render() {
    return (
      <div id="container">
        <Display result={this.state.next || this.state.total || '0'} />
        <ButtonPanel clickHandler={this.clickHandler}/>
      </div>
    )
  }
}

export default App;