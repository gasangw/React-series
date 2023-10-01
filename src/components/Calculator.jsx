import operate from "./Operation";

function isNumber(item) {
    return !!item.match(/[0-9]+/);
  }
  
  /**
   * Given a button name and a calculator data object, return an updated
   * calculator data object.
   *
   * Calculator data object contains:
   *   total:s      the running total
   *   next:String       the next number to be operated on with the total
   *   operate:String  +, -, etc.
   */
  export default function calculate(obj, buttonName) {
    if (buttonName === 'AC') {
        // return an empty an empty object
      return {
        total: null,
        next: null,
        operate: null,
      };
    }
  
    if (isNumber(buttonName)) {
      if (buttonName === '0' && obj.next === '0') {
        return {};
      }
      // If there is an operation, update next
      if (obj.operate) {
        if (obj.next && obj.next !== '0') {
          return { ...obj, next: obj.next + buttonName };
        }
        return { ...obj, next: buttonName };
      }
      // If there is no operation, update next and clear the value
      if (obj.next && obj.next !== '0') {
        return {
          next: obj.next + buttonName,
          total: null,
        };
      }
      return {
        next: buttonName,
        total: null,
      };
    }
  
    if (buttonName === '.') {
      if (obj.next) {
        if (obj.next.includes('.')) {
          return { ...obj };
        }
        return { ...obj, next: `${obj.next}.` };
      }
      if (obj.operate) {
        return { ...obj, next: '0.' };
      }
      if (obj.total) {
        if (obj.total.includes('.')) {
          return {};
        }
        return { ...obj, next: `${obj.total}.` };
      }
      return { ...obj, next: '0.' };
    }
  
    if (buttonName === '=') {
      if (obj.next && obj.operate) {
        return {
          total: operate(obj.total, obj.next, obj.operate),
          next: null,
          operation: null,
        };
      }
      // '=' with no operation, nothing to do
      return {};
    }
  
    if (buttonName === '+/-') {
      if (obj.next) {
        return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
      }
      if (obj.total) {
        return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
      }
      return {};
    }
      // User pressed an operation after pressing '='
    if (!obj.next && obj.total && !obj.operate) {
      return { ...obj, operate: buttonName };
    }
  
    // User pressed an operation button and there is an existing operation
    if (obj.operate) {
      if (obj.total && !obj.next) {
        return { ...obj, operate: buttonName };
      }
      
      if (!obj.total) {
        return { total: 0, operate: buttonName };
      }
  
      return {
        total: operate(obj.total, obj.next, obj.operate),
        next: null,
        operate: buttonName,
      };
    }
  
    // no operation yet, but the user typed one
  
    // The user hasn't typed a number yet, just save the operation
    if (!obj.next) {
      return { operate: buttonName };
    }
  
    // save the operation and shift 'next' into 'total'
    return {
      total: obj.next,
      next: null,
      operate: buttonName,
    };
  }