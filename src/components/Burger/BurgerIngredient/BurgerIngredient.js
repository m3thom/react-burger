import React, { Component } from 'react'
import './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
	render() {
		let ingredient = null
		switch (this.props.type) {
			case 'bread-bottom':
				return <div className="BreadBottom" ></div>;
			case 'cheese':
				return <div className="Cheese"></div>;
			case 'meat':
				return <div className="Meat"></div>;
			case 'salad':
				return <div className="Salad"></div>;
			case 'bacon':
				return <div className="Bacon"></div>;
			case 'bread-top':
				return (
					<div className="BreadTop">
						<div className="Seeds1"></div>
						<div className="Seeds2"></div>
					</div>
				);
			default:
				return ingredient;
		};
	};
};

BurgerIngredient.propTypes = {
	type: PropTypes.string.isRequired
}

export default BurgerIngredient;
