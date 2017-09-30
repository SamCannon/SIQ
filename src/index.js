//Import node dependencies
const React = require('react');
const ReactDOM = require('react-dom'); 

//Import individual components for rendering
const PhNum1 = require('./components/phNum1');
const PhNum2 = require('./components/phNum2');
const FirstName = require('./components/firstName');
const LastName = require('./components.lastName');

//app declaration to render all imported components
const App = () => {

	return <p>Hello there</p>;

}

//render app to the dom
ReactDOM.render(<App />, document.getElementById('container'));