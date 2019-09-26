import {React, component} from 'react';
import PropTypes from 'prop-types';

class ButtonPanel extends component {
  render(){
    return(
      <div className="display">
        <div>
          {this.props.result}
        </div>
      </div>

    );
  }
}

export default ButtonPanel;