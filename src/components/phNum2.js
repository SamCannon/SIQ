const React = require('react');

class PhNum2 extends React.Component {

	render() {

		return <input onChange={this.onInputChange}/>

	}

	onInputChange(event) {

		console.log(event.target.value);

	}

} 

export default PhNum2;