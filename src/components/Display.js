import {React, component} from 'react';
import PropTypes from 'prop-types';

class Display extends component {
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

Display.propTypes = {
  result: PropTypes.string.isRequired
};

Display.defaultProps = {
  result: '0'
};
export default Display;