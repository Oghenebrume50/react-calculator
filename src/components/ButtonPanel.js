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
          <Button name='AC' color='grey' clickHandler={this.clickHandler}/>
          <Button name='+/-' color='grey' clickHandler={this.clickHandler} />
          <Button name='%' color='grey' clickHandler={this.clickHandler}/>
          <Button name='/' clickHandler={this.clickHandler} />
        </div>
        <div>
          <Button name='7' color='grey' clickHandler={this.clickHandler}/>
          <Button name='8' color='grey' clickHandler={this.clickHandler}/>
          <Button name='9' color='grey' clickHandler={this.clickHandler}/>
          <Button name='*' clickHandler={this.clickHandler} />
        </div>
        <div>
          <Button name='4' color='grey' clickHandler={this.clickHandler}/>
          <Button name='5' color='grey' clickHandler={this.clickHandler}/>
          <Button name='6' color='grey' clickHandler={this.clickHandler}/>
          <Button name='-' clickHandler={this.clickHandler} />
        </div>
        <div>
          <Button name='1' color='grey' clickHandler={this.clickHandler}/>
          <Button name='2' color='grey' clickHandler={this.clickHandler}/>
          <Button name='3' color='grey' clickHandler={this.clickHandler}/>
          <Button name='+' clickHandler={this.clickHandler} />
        </div>
        <div>
          <Button name='0' color='grey' clickHandler={this.clickHandler} wide='50%'/>
          <Button name='.' color='grey' clickHandler={this.clickHandler}/>
          <Button name='=' clickHandler={this.clickHandler} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;