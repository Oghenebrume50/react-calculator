import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {  
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render(){
    const style = {
      background: this.props.color,
      padding: this.props.wide !== '25%' ? '5% 70px' : '10% 70px',
    }
  
    const btnDivStyle = {
      width: this.props.wide,
    }

    return(
      <div style={btnDivStyle}>
        <button 
        style={style}
        onClick={this.handleClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired
};

Button.defaultProps = {
  color: 'orange',
  wide: '25%'
}

export default Button;