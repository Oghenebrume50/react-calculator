import {React, component} from 'react';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends component {
  render() {
    return (
      <div>
        <Display/>
        <ButtonPanel/>
      </div>
    )
  }
}

export default App;