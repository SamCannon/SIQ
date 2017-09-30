const React = require('react');

class Opt11 extends React.Component {

	onInputChange(event) {

		console.log(event.target.value);

	}

	render() {

		return <select onChange={this.onInputChange} />
		
	}

}