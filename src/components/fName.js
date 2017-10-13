import React, {Component} from 'react';

class FirstName extends Component {

	render() {

		return <input onChange={this.onInputChange}/>

	}

	onInputChange(event) {

		console.log(event.target.value);

	}

};

export default FirstName;