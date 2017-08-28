import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Task3 extends Component {

	constructor(props){
		super(props);
		this.state = {
			res1: 0,
			res2: 0,
			result: 0
		}

		this.onChangeCall = this.onChangeCall.bind(this);
		this.onChangeReturnCall = this.onChangeReturnCall.bind(this);
		this.summArgs = this.summArgs.bind(this);
		this.coolAdd = this.coolAdd.bind(this);
	}

	summArgs(pull){
		var args = [],
			summ = 0;

		if (pull) {
			for (let i = 0; i < pull.length; i++){
				summ = summ + +pull[i];
			}
		}

		return summ
	}
	coolAdd(pull){

		this.setState({
			res1: this.summArgs(pull),
			val1: pull
		})
		if (this.state.res2 === 0) this.setState( (prevState) => ({
			result: prevState.res1
		}))
		else this.setState( (prevState) => ({
			result: prevState.res1 + prevState.res2
		}))

		return (pull2) => {
	
			return this.summArgs(pull2)
	
		}
	}
	onChangeCall(ev){

		this.coolAdd(ev.target.value.split(' '))


	}
	onChangeReturnCall(ev){

		var	val2 = ev.target.value;
	
		this.setState( (prevState) => ({
				res2: this.coolAdd(prevState.val1)(val2.split(' ')),
				result: prevState.res1 + prevState.res2
		  }));

	}

	render() {
		return (
			<fieldset title="task3" className="task1-field">
				<legend>Task 3</legend>
				
				<div>
					<div>coolAdd()</div>
					<div>coolAdd()()</div>
					<textarea id="text-input1-task3" placeholder="Output task1" onChange={this.onChangeCall}/>
					<textarea id="text-input2-task3" placeholder="Output task1" onChange={this.onChangeReturnCall}/>
				</div>

				<textarea id="text-output-task3" placeholder="Output task1" defaultValue={''} value={this.state.result}/>

			</fieldset>
		);
	}
}

export default Task3;