import React, { Component } from 'react'
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
	salad: 0.5,
	meat: 1.5,
	bacon: .75,
	cheese: 1,
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			bacon: 0,
			cheese: 0,
			meat: 0,
			salad: 0,
		},
		price: 2,
		purchasable: false,
		purchasing: false,

	}
	componentDidMount() {
	}
	updatePurchableHandler(ingredients) {
		const sumIngAmount = Object.values(ingredients)
			.reduce((curSum, el) => {
				return curSum + el
			})
		return sumIngAmount > 0
	}
	addIngredientHandler = (type) => {
		this.setState(state => {
			const currentIntgAmount = state.ingredients[type]
			const price = parseFloat(state.price + INGREDIENTS_PRICES[type])
			const ingredients = { ...this.state.ingredients }
			ingredients[type] = currentIntgAmount + 1
			const purchasable = this.updatePurchableHandler(ingredients)
			return { ingredients, price, purchasable }
		})

	}
	removeIngredientHander = (type) => {
		this.setState(state => {
			const currentIntgAmount = state.ingredients[type]
			if (currentIntgAmount === 0) {
				return
			}
			const price = parseFloat(state.price - INGREDIENTS_PRICES[type])
			const ingredients = { ...this.state.ingredients }
			ingredients[type] = currentIntgAmount - 1
			const purchasable = this.updatePurchableHandler(ingredients)
			return { ingredients, price, purchasable }
		})
	}
	calculatePriceHandler = (type) => {

	}
	adjustIngredientAmount = (type, amount) => {

	}
	purchaseToggleHandler = () => {
		this.setState(state => {
			return { purchasing: !state.purchasing };
		})
	}
	render() {
		const { ingredients, price, purchasable, purchasing } = this.state
		const disabledInfo = { ...ingredients }
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] === 0
		}
		return (
			<Aux>
				<Modal 
				show={purchasing}
				onClose={this.purchaseToggleHandler}
				>
					<OrderSummary ingredients={ingredients} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredientHandler={this.addIngredientHandler}
					removeIngredientHander={this.removeIngredientHander}
					disabledInfo={disabledInfo}
					price={price}
					purchasing={this.purchaseToggleHandler}
					purchasable={purchasable}
				/>
			</Aux>
		);
	};
};

export default BurgerBuilder
