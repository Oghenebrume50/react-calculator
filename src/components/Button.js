import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const style = {
    background: props.color,
    padding: props.wide !== '25%' ? '5% 70px' : '10% 70px',
  }

  const btnDivStyle = {
    width: props.wide,
  }

  return(
    
    <div style={btnDivStyle}>
      <button style={style}>
        {props.name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'orange',
  wide: '25%'
}

export default Button;