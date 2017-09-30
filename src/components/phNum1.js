const React = require('react');

class PhNum1 extends React.Component {

	render() {

		return <input onChange={this.onInputChange}/>

	}

	onInputChange(event) {

		console.log(event.target.value);

	}

} 

export default PhNum1;