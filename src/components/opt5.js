//Import node dependencies
import React, {Component} from 'react';

//Render drop down component
class Opt5 extends Component {

	onInputChange(event) {

		console.log(event.target.value);

	};

	render() {

		return <select onChange={this.onInputChange} />;
		
	};

};

export default Opt5;