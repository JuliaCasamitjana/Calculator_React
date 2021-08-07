//SET VALUE GIVEN FROM KEYS
export const enterValue = (key_calc="") =>{
    return {
        type: 'ENTER_VALUE',
        key_calc
    }
};

//AC
export const reset = () =>{
    return{
        type: 'RESET'
    }
}

//SWITCH_SIGN
export const switchSign = () =>{
    return{
        type:'SWITCH_SIGN'
    }
}

//OPERATION AND EQUAL(DEFAULT)   
export const operation = (operator='') =>{
    return{
        type:'OPERATION',
        operator
    }
}

//DEL
export const del = () =>{
    return{
        type:'DEL',
    }
}
