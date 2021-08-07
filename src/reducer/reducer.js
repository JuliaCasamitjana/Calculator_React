const calculatorDefaultState = 
{
  numberInput:'0',
  errorMsg:''
};

 export default (state = calculatorDefaultState, action) =>{
  switch (action.type){
    case 'ENTER_VALUE':
      if (state.numberInput ==='0') state.numberInput=''
      return {
              errorMsg:'',
              numberInput: state.numberInput + action.key_calc
            }
    case 'RESET':
      return {
        numberInput:'0',
        errorMsg:''
      };
    case 'DEL':
      return {
              errorMsg:'',
              numberInput: state.numberInput.slice(0, state.numberInput.length-1)
            }
    case 'SWITCH_SIGN':
      return {
          ...state, 
          numberInput: (0 - (state.numberInput.match(/-*\d*/).join(''))).toString()
        
        }

    case 'OPERATION':
    if ( (/(?<=\d)[+x/-](?=\d)/).test(state.numberInput) ) { //True if there is an operation mark between numbers
        
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
            return state;
        }
      }else if ( (/(?<=\d)[+x/-]/).test(state.numberInput) ){ //True if there is a number followed by operator
        return {
          ...state,
          errorMsg: 'Insert a number'
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
 