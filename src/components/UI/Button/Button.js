import React from 'react'
import './Button.css'

const Button = (props) => {
	return (
		<button
		onClick={props.onClick}
		className={`Button ${props.type}`}
		>
			{props.children}
		</button>
	)
};

export default Button
