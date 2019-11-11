import React, { Component } from 'react'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'

class CheckOut extends Component {
	state = {
		ingredients: {
			cheese: 1,
			meat: 1,
			salad: 2,
			bacon: 2,
		}
	}
	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search)
		const ingredients = {}
		for (let param in query.entries()){
			ingredients[param[0]] = param[1]
		}
		this.setState({ingredients})

	}
	cancelledCheckOutHandler = () => {
		this.props.history.goBack();
	}

	continuedCheckOutHandler = () => {
		this.props.history.push('/checkout/contact-data')
	}
	render() {
		return (
			<div>
				<CheckOutSummary
					ingredients={this.state.ingredients}
					continuedCheckOut={this.continuedCheckOutHandler}
					cancelledCheckOut={this.cancelledCheckOutHandler}
				/>
			</div>
		)
	};
};

export default CheckOut
