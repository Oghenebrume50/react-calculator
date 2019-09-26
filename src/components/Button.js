import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render(){
    return(
      <div className="button-name">
        <button>
          {this.props.name}
        </button>
      </div>

    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;