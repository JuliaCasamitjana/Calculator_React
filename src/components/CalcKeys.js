import React from 'react';
import { connect } from 'react-redux';
import { enterValue, reset, switchSign, operation, del } from '../action/calculator'

const CalcKeys = (props) =>{
	const numbers = [
		7, 8, 9,
		4, 5, 6,
		1, 2, 3,
		0, '.'
	]
	const operators = ["/", "x", "-", "+"]

	return(
		<div>
			<div>
				<button onClick = {()=>{props.reset()}}>AC</button>
				<button onClick = {()=>{props.switchSign()}}>+/-</button>
				<button onClick = {()=>{props.del()}}>DEL</button>
			</div>

			<div className = 'calculator__numbers'>
			{
				numbers.map((k) => {
					return <button onClick = {()=>{props.enterValue(k)}} 
					key={k}>{k}</button>
				})	
			}
			<button onClick = {()=>{props.operation()}}>=</button>
			</div>

			<div className = 'calculator__operators'>
			{
				operators.map((o) => {
					return <button onClick = {()=>{props.operation(o)}} 
						key={o}>{o}</button>
				})	
			}
			</div>
			
		</div>
	)
}

const mapDispatchToProps = (dispatch) =>({
	enterValue: (k)=> dispatch(enterValue(k)),
	reset: () => dispatch(reset()),
	switchSign: () => dispatch(switchSign()),
	operation: (o) => dispatch(operation(o)),
	del: () => dispatch(del())
})

export default connect (undefined, mapDispatchToProps)(CalcKeys);
