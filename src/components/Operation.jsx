import Big from "big-js";

const operate =(numberOne, numberTwo, operate)=> {
  const one = Big(numberOne)
  const two = Big(numberTwo)

  if(operate === '+'){
    return one.plus(two).toString()
  }
  if(operate === '-'){
     return one.minus(two).toString()
  }
  if(operate === 'x'){
    return one.times(two).toString()
  }
  if(operate === '÷'){
    try {
       return one.div(two).toString()
    } catch (error) {
      return "Can't divide by 0"
    }
  }
  if(operate === '%'){
    try{
       return one.mod(two).toString()
    }catch(error) {
      return "Can't find modulo because can't divide by 0"
    }
  }
  throw Error(`Unknown operation ${operate}`)
}

export default operate;