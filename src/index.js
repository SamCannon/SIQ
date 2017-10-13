//Import node dependencies
import React from 'react';
import ReactDOM from 'react-dom'; 

//Import individual components for rendering
import CustomerInfo from './components/CustomerInfo.js';


//app declaration to render all imported components
const App = () => {

	return (
		<div>
			<CustomerInfo />
		</div>
	);

};

//render app to the dom
ReactDOM.render(<App/>, document.getElementById('container'));