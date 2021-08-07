import React from 'react';
import { connect } from 'react-redux';

const CalcInput = (props) =>{


	return(
		<div className="calculator__input">
			{ <p>{props.numberInput} <span className="calculator__input__error">{props.errorMsg}</span></p> }
			
		</div>
		)
}

const mapStateToProps = (state) =>{
	return{
		numberInput: state.numberInput,
		errorMsg: state.errorMsg
	}
}

export default connect(mapStateToProps)(CalcInput);
