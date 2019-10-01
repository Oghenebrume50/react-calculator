import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  return(
    <div className="button-panel">
      <div>
        <Button name='AC' color='grey' />
        <Button name='+/-' color='grey' />
        <Button name='%' color='grey' />
        <Button name='/' />
      </div>
      <div>
        <Button name='7' color='grey' />
        <Button name='8' color='grey' />
        <Button name='9'color='grey'  />
        <Button name='*' />
      </div>
      <div>
        <Button name='4'color='grey'  />
        <Button name='5' color='grey' />
        <Button name='6' color='grey' />
        <Button name='-' />
      </div>
      <div>
        <Button name='1' color='grey' />
        <Button name='2' color='grey' />
        <Button name='3' color='grey' />
        <Button name='+' />
      </div>
      <div>
        <Button name='0' color='grey' wide='50%'/>
        <Button name='.' color='grey' />
        <Button name='=' />
      </div>
    </div>
  );
}

export default ButtonPanel;