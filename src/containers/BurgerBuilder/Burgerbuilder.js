import React, { Component } from 'react'
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import instance from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';


const INGREDIENTS_PRICES = {
	salad: 0.5,
	meat: 1.5,
	bacon: .75,
	cheese: 1,
}

class BurgerBuilder extends Component {
	state = {
		ingredients: null,
		price: 2,
		purchasable: false,
		purchasing: false,
		loading: false,

	}
	componentDidMount() {
		instance.get('https://udemy-burger-react-guide.firebaseio.com/ingredients.json')
			.then(res => {
				this.setState({ ingredients: res.data })
			})
			.catch(er => {

			})

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
	purchaseToggleHandler = () => {
		this.setState(state => {
			return { purchasing: !state.purchasing };
		})
	}
	continuePurchaseHandler = () => {
		// const { ingredients } = this.state
		// const order = {
		// 	ingredients,
		// 	created_at: new Date(),
		// 	updated_at: new Date(),
		// 	created_by: 'test',
		// }
		// this.loadingOrderHandler();
		// instance.post('/orders.json', order)
		// 	.then((res) => {
		// 		console.log(res);
		// 		this.finishLoadingOrderHandler()
		// 	})
		// 	.catch((er) => {
		// 		console.log(er);
		// 		this.finishLoadingOrderHandler()

		// 	})
		const queryParams = []
		for (var i in this.state.ingredients) {
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
		}
		const searchParams = queryParams.join('&')
		this.props.history.push({
			pathname: '/checkout',
			search: '?' + searchParams
		})
	}
	loadingOrderHandler = () => {
		this.setState({ loading: true, })
	}
	finishLoadingOrderHandler = () => {
		this.setState({ loading: false, purchasing: false })
	}
	toggleLoadingHandler = () => {
		this.setState(state => { return { loading: !state.loading } });
	}

	render() {
		//console.log(this.props)
		const { ingredients, price, purchasable, purchasing } = this.state
		const disabledInfo = { ...ingredients }
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] === 0
		}
		let burger = <Spinner />
		let ordersummary = null
		if (ingredients) {
			burger = <Aux>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					addIngredientHandler={this.addIngredientHandler}
					removeIngredientHander={this.removeIngredientHander}
					disabledInfo={disabledInfo}
					price={price}
					purchasing={this.purchaseToggleHandler}
					purchasable={purchasable}
				/>
			</Aux>;
			ordersummary = <OrderSummary
				ingredients={ingredients}
				onCancle={this.purchaseToggleHandler}
				onContinue={this.continuePurchaseHandler}
				price={price}
			/>;
		}

		if (this.state.loading) {
			ordersummary = <Spinner />
		}
		return (
			<Aux>
				<Modal
					show={purchasing}
					onClose={this.purchaseToggleHandler}
				>
					{ordersummary}
				</Modal>
				{burger}
			</Aux>
		);
	};
};

export default WithErrorHandler(BurgerBuilder, instance);
