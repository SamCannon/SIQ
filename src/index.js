//Import node dependencies
import React from 'react';
import ReactDOM from 'react-dom'; 

//Import individual components for rendering
import CustomerInfo from './components/CustomerInfo';
import Window from './components/Window';


//app declaration to render all imported components
const App = () => {

	return (
		<div>
			<div>
				<CustomerInfo />
			</div>
			<div>
				<Window />
			</div>
		</div>
	);

};

//render app to the dom
ReactDOM.render(<App/>, document.getElementById('container'));