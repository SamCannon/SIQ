//Import node dependencies
import React, {Component} from 'react';

//Import individual components for rendering
import PhNum1 from './PhNum1';
import Fax from './Fax';
import Email from './Email';
import PhNum2 from './PhNum2';
import FirstName from './fName';
import LastName from './lName';
import Company from './Company';
import Address from './Address';

class CustomerInfo extends Component {

	render() {

		return (

			<div>

				<table>

					<tbody>
						<tr>
							<th>
								<h3>Customer Information</h3>
							</th>
						</tr>
						<tr>
							<td>
								<label>First Name: </label>
								<FirstName />
							</td>
							<td>
								<label>Last Name: </label>
								<LastName />
							</td>
							<td>
								<label>Company Name: </label>
								<Company />
							</td>
							<td>
								<label>Address: </label>
								<Address />
							</td>
						</tr>
						<tr>
							<td>
								<label>Primary Phone: </label>
								<PhNum1 />
							</td>
							<td>
								<label>Fax: </label>
								<Fax />
							</td>
							<td>
								<label>Email: </label>
								<Email />
							</td>
							<td>
								<label>Secondary Phone: </label>
								<PhNum2 />
							</td>
						</tr>
					</tbody>

				</table>

			</div>

		);

	};

};

export default CustomerInfo;
