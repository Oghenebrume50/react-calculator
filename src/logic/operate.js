import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  const first = Big(numberOne);
  const second = Big(numberTwo);

  if (operator === '+'){
    return first.plus(second).toString();
  }
  else if (operator === '-') {
    return first.sub(second).toString();
  }
  else if (operator === '*') {
    return first.mul(second).toString();
  }
  else if (operator === '/') {
    return first.div(second).toString();
  }
  else if (operator === '%') {
    return first.mod(second).toString();
  }
  else {
    throw Error(`Unknown operation ${operator}`);
  }
}

export default operate;