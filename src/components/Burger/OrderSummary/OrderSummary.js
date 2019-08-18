import React from 'react'
import Aux from '../../../hoc/Aux';
import ShortId from 'short-id'

const OrderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igKey => {
			return (
				<li
					key={ShortId.generate()}
				>
					<span style={{ textTransform: "capitalize" }}>
						{igKey}
					</span>: {props.ingredients[igKey]}
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
		</Aux>
	)
};

export default OrderSummary
