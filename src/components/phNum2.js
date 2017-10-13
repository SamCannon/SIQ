import React, {Component} from 'react';

class PhNum2 extends Component {

	render() {

		return <input onChange={this.onInputChange}/>

	}

	onInputChange(event) {

		console.log(event.target.value);

	}

};

export default PhNum2;