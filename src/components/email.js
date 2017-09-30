const React = require('react');

class Email extends React.Component {

	render() {

		return <input onChange={this.onInputChange}/>

	}

	onInputChange(event) {

		console.log(event.target.value);

	}

} 

export default firstName;