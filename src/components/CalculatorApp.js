import React from 'react';
import CalcInput from './CalcInput';
import CalcKeys from './CalcKeys';



const CalculatorApp = () =>{
	return(
		<div className="calculator__center">
			<h1>Calculator</h1>
			<div className = "calculator__box">
				<CalcInput />
				<CalcKeys />
			</div>
		</div>
		)
}



export default CalculatorApp;