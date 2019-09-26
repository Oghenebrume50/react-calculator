import React from 'react';
import PropTypes from 'prop-types';

const Button = () => {
  return(
    <div className="button-name">
      <button>
        {this.props.name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;