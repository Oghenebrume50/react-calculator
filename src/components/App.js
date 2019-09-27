import React, { Component } from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/app.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Display />
        <ButtonPanel/>
      </div>
    )
  }
}

export default App;