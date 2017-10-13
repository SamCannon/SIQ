import React, {Component} from 'react';

class PhNum1 extends Component {
	
	render() {

		return <input onChange={this.onInputChange}/>

	}

	onInputChange(event) {

		console.log(event.target.value);

	}

};

export default PhNum1;