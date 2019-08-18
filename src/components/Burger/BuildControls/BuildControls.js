import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Meat", type: "meat" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Bacon", type: "bacon" },
]

const BuildControls = (props) => {
	return (
		<div className="BuildControls">
			<p>Total Price:
			<strong> {props.price}</strong>
			</p>
			{
				controls.map(control => {
					const { type } = control
					return <BuildControl
						label={control.label}
						key={control.label}
						added={() => props.addIngredientHandler(type)}
						removed={() => props.removeIngredientHander(type)}
						disabled={props.disabledInfo[type]}
					/>
				})
			}
			<button
				className="OrderButton"
				disabled={!props.purchasable}
				onClick={props.purchasing}
			>
				CHECK OUT!
			</button>
		</div>
	)
};

export default BuildControls
