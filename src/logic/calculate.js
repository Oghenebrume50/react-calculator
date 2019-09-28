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
    return {};
  }

}

export default calculate;