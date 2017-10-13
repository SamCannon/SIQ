import React, {Component} from 'react';

class Company extends Component {

	render() {

		return <input onChange={this.onInputChange}/>

	}

	onInputChange(event) {

		console.log(event.target.value);

	}

}; 

export default Company;