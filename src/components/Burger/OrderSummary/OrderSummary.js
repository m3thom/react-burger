import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux';
import ShortId from 'short-id'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(igKey => {
				return (
					<li
						key={ShortId.generate()}
					>
						<span style={{ textTransform: "capitalize" }}>
							{igKey}
						</span>: {this.props.ingredients[igKey]}
					</li>
				);
			});
		return (
			<Aux>
				<h3>Your order</h3>
				<p>A delicios burger with the following ingredients: </p>
				<ul>
					{ingredientSummary}
				</ul>
				<p>Continuon to checkout?</p>
				<strong><p>Total price: {this.props.price}</p></strong>
				<Button type="Danger" onClick={this.props.onCancle}>CANCLE</Button>
				<Button type="Success" onClick={this.props.onContinue}>CONTINUE</Button>
			</Aux>
		)
	}
};

export default OrderSummary
