import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return(
    <div className={props.wide ? "wide" : "button" }>
      <button className={props.orange ? "orange" : "" || props.wide ? "button-wide" : ""}>
        {props.name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

export default Button;