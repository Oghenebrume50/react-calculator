import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return(
    <div className="button-name">
      <button>
        {props.name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;