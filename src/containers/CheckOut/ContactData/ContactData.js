import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'

class ContactData extends Component {
	state = {
		name: '',
		address: '',
		email: '',
		postcode: '',

	}
	render() {
		return (
			<div>
				<h4>Enter your contact</h4>
				<form>
					<input type="text" name="name" placeholder="Your Name" />
					<input type="text" name="address" placeholder="Adress" />
					<input type="email" name="email" placeholder="Email" />
					<input type="text" name="postcode" placeholder="Post Code" />
					<Button type="Success" >Order</Button>
				</form>
			</div>
		)
	}
}

export default ContactData
