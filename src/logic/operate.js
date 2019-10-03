import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  const first = Big(numberOne);
  const second = Big(numberTwo);
  let num = '';
  switch(operator) {
    case '+': num = first.plus(second).toString()
      break;
    case '-': num = first.sub(second).toString();
      break;
    case '*': num = first.mul(second).toString();
      break;
    case '/': 
      num = numberTwo === '0' ? '0' :  first.div(second).toString();
      break;
    case '%': num = first.mod(second).toString();
      break;
    default: 
      throw Error(`Unknown operation ${operator}`);
  }

  return num;
}

export default operate;