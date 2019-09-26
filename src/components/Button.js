import {React, component} from 'react';
import PropTypes from 'prop-types';

class Button extends component {
  render(){
    return(
      <div className="button-name">
        <div>
          {this.props.name}
        </div>
      </div>

    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;