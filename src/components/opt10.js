import React, {Component} from 'react';

class Opt10 extends React.Component {

	onInputChange(event) {

		console.log(event.target.value);

	}

	render() {

		return <select onChange={this.onInputChange} />
		
	}

};

export default Opt10;