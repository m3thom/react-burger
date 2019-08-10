import React from 'react'
import './BurgerIngredient.css'

const BurgerIngredient = (props) => {
	let ingredient = null
	switch (props.type) {
		case 'bread-bottom':
			return <div className="BreadBottom"></div>;
		case 'bread-top':
			return (
				<div className="BreadBottom">
					<div className="Seeds1"></div>
					<div className="Seeds2"></div>
				</div>
			);
		case 'cheese':
			return <div className="Cheese"></div>;
		case 'meat':
			return <div className="Meat"></div>;
		case 'salad':
			return <div className="Salad"></div>;
		case 'bacon':
			return <div className="Bacon"></div>;
		default:
			return ingredient;
	}
}

export default BurgerIngredient;
