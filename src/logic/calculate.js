import isNum from '../utils/isNum';
import operate from './operate';

const calculate = (dataObject, buttonName) => {
  if(buttonName === 'AC') {
    return {
      operation: null,
      total: null,
      next: null
    }
  }

  if (buttonName === '+/-') {
    if (dataObject.next) {
      return { next: (-1 * parseFloat(dataObject.next)).toString() };
    }
    if (dataObject.total) {
      return { total: (-1 * parseFloat(dataObject.total)).toString() };
    }
  }

  if (isNum(buttonName)) {
    if (buttonName === '0' && dataObject.next === '0') {
      return {total: null, next:null, operation: null};
    }
    if (dataObject.operation) {
      if (dataObject.next) {
        return { next: dataObject.next + buttonName };
      }
      return { next: buttonName };
    }
    if (dataObject.next) {
      return {
        next: dataObject.next + buttonName,
        total: null,
      };
    }

    return {
      next: buttonName,
      total: null,
    };
  }
  

  if (buttonName === '=') {
    if (dataObject.next && dataObject.operation) {
      return {
        total: operate(dataObject.total, dataObject.next, dataObject.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '.') {
    if (dataObject.next) {
      return { next: dataObject.next + '.' };
    }
    
    if (dataObject.total) {
      return { total: dataObject.total + '.' };
    }
    return { total: '0.' };
  }

  if (dataObject.operation) {
    return {
      total: operate(dataObject.total, dataObject.next, dataObject.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (dataObject.total && !dataObject.next) {
    return { operation: buttonName };
  }


  return {
    total: dataObject.next,
    next: null,
    operation: buttonName,
  };
}

export default calculate;