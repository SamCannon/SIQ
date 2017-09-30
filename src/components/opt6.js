const React = require('react');

class Opt6 extends React.Component {

	onInputChange(event) {

		console.log(event.target.value);

	}

	render() {

		return <select onChange={this.onInputChange} />
		
	}

}