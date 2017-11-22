//Import node dependencies
import React, {Component} from 'react';

//Render text input component
class Width extends Component {

	onInputChange(event) {

		console.log(event.target.value);

	};

	render() {

		return <input onChangeText={this.onInputChange} />;
		
	};

};

export default Width;