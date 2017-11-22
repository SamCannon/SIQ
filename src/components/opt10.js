//Import node dependencies
import React, {Component} from 'react';


class Opt10 extends Component {

	onInputChange(event) {

		console.log(event.target.value);

	}

	render() {

		return <select onChange={this.onInputChange} />
		
	}

};

export default Opt10;