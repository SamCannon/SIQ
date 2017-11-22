//import node dependencies
import React, {Component} from 'react';

//Render text input component
class FirstName extends Component {

	render() {

		return <input onChange={this.onInputChange}/>;

	};

	onInputChange(event) {

		console.log(event.target.value);

	};

};

export default FirstName;