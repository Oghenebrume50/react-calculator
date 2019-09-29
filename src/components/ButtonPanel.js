import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  clickHandler = (buttonName) => {
    this.props.clickHandler(buttonName);
  }
  render() {
    return(
      <div className="button-panel">
        <div>
          <Button name='AC' clickHandler={this.clickHandler}/>
          <Button name='+/-' clickHandler={this.clickHandler} />
          <Button name='%' clickHandler={this.clickHandler}/>
          <Button name='/' clickHandler={this.clickHandler} orange/>
        </div>
        <div>
          <Button name='7' clickHandler={this.clickHandler}/>
          <Button name='8' clickHandler={this.clickHandler}/>
          <Button name='9' clickHandler={this.clickHandler}/>
          <Button name='*' clickHandler={this.clickHandler} orange/>
        </div>
        <div>
          <Button name='4' clickHandler={this.clickHandler}/>
          <Button name='5' clickHandler={this.clickHandler}/>
          <Button name='6' clickHandler={this.clickHandler}/>
          <Button name='-' clickHandler={this.clickHandler} orange/>
        </div>
        <div>
          <Button name='1' clickHandler={this.clickHandler}/>
          <Button name='2' clickHandler={this.clickHandler}/>
          <Button name='3' clickHandler={this.clickHandler}/>
          <Button name='+' clickHandler={this.clickHandler} orange/>
        </div>
        <div>
          <Button name='0' clickHandler={this.clickHandler} wide/>
          <Button name='.' clickHandler={this.clickHandler}/>
          <Button name='=' clickHandler={this.clickHandler} orange/>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;