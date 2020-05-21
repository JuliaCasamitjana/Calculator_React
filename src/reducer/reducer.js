const calculatorDefaultState = 
{
  numberInput:'',
  result:''
};

 export default (state = calculatorDefaultState, action) =>{
  switch (action.type){
    case 'ENTER_VALUE':
      return {
              ...state, 
              numberInput: state.numberInput + action.key_calc
            }
    case 'RESET':
      return calculatorDefaultState
    case 'DEL':
      return {
              ...state, 
              numberInput: state.numberInput.slice(0, state.numberInput.length-1)
            }
    case 'SWITCH_SIGN':
      return {
          ...state, 
          numberInput: 0 - state.numberInput
        
        }

    case 'OPERATION':
    if ( (/(?<=\d)[+x/-]/).test(state.numberInput) ) { //True if there is an operation mark before numbers
        
        const existingOperator = state.numberInput.match(/(?<=\d)[+x/-]/).join();
        const numberA = state.numberInput.match(/.*(?=[+x/-])/).join();
        const numberB = state.numberInput.match(/(?<=\d[+x/-]).*/).join();
        
        switch( existingOperator ){
          case '+':
            return {
                ...state, 
                numberInput: (parseFloat(numberA) + parseFloat(numberB)) + action.operator
            }
            /* falls through */
          case '-':
              return {
                ...state, 
                numberInput: (parseFloat(numberA) - parseFloat(numberB)) + action.operator
              }
            /* falls through */
          case '/':
            return {
              ...state, 
              numberInput: (parseFloat(numberA) / parseFloat(numberB)) + action.operator
            }
            /* falls through */
          case 'x':
            return {
              ...state, 
              numberInput: (parseFloat(numberA) * parseFloat(numberB)) + action.operator
            }
            /* falls through */
          default:
            return state
        }
      } else {
          return {
            ...state,
            numberInput: state.numberInput + action.operator
          }
      } 

    default:
      return state;
  }
 }