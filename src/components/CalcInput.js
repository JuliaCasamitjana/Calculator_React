import React from 'react';
import { connect } from 'react-redux';

const CalcInput = (props) =>{


	return(
		<div className="calculator__input">
			{ <p>{props.numberInput}</p> }
		</div>
		)
}

const mapStateToProps = (state) =>{
	return{
		numberInput: state.numberInput
	}
}

export default connect(mapStateToProps)(CalcInput);