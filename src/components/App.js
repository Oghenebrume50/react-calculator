import {React, component} from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends component {
  constructor(){
    super();
    this.state = {
      result: '0'
    }
  }

  render() {
    return (
      <div id="container">
        <Display result={this.state.result}/>
        <ButtonPanel/>
      </div>
    )
  }
}

export default App;