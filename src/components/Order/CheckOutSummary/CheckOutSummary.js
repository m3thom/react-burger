import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckOutSummary.css'

const CheckOutSummary = (props) => (
	<div className="CheckOutSummary">
		<h1>Have a nice tested!</h1>
		<div style={{ width: '100%', margin: 'auto' }}>
			<Burger ingredients={props.ingredients} />
		</div>
		<Button 
		type="Danger"
		onClick={props.cancelledCheckOut}
		>CANCLE</Button>
		<Button 
		onClick={props.continiuedCheckOut}
		type="Success"

		>CONTINUE</Button>
	</div>
)

export default CheckOutSummary
