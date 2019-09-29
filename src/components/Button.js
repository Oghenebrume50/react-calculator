import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render(){
    return(
      <div className={this.props.wide ? "wide" : "button" }>
        <button 
        className={this.props.orange ? "orange" : "" || this.props.wide ? "button-wide" : ""}
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

export default Button;