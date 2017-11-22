//Import node dependencies
import React, {Component} from 'react';

//Import individual components for rendering
import Width from './Width';
import Height from './Height';
import Opt1 from './Opt1';
import Opt2 from './Opt2';
import Opt3 from './Opt3';
import Opt4 from './Opt4';
import Opt5 from './Opt5';
import Opt6 from './Opt6';
import Opt7 from './Opt7';
import Opt8 from './Opt8';


class Window extends Component {

	render() {

		return (	

			<div>
				<Opt1 />
				<br />
				<Opt2 />
				<br />
				<Width />
				<br />
				<Height />
				<br />
				<Opt3 />
				<br />
				<Opt4 />
				<br />
				<Opt5 />
				<br />
				<Opt6 />
			</div>

		);

	};

};

export default Window;