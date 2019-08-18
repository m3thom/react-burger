import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import ShortId from 'short-id'

const burger = (props) => {
	const { ingredients } = props;
	let transformedIngredient = Object.keys(ingredients)
		.map(intgKey => {
			return [...Array(ingredients[intgKey])].map((_, index) => {
				return <BurgerIngredient type={intgKey} key={ShortId.generate()} />
			})
		}).reduce((cur, em) => {
			return cur.concat(em)
		}, []);
	if (transformedIngredient.length === 0) {
		transformedIngredient = <p>Please add ingredient.</p>
	}
	return (
		<div className="Burger">
			<BurgerIngredient type="bread-top" />
			{transformedIngredient}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
}

export default burger