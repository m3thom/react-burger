import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css'

const NavigationItems = (props) => (
	<ul className="NavigationItems">
		<NavigationItem link="/" active={true}>Home</NavigationItem>
		<NavigationItem link="/">CheckOut</NavigationItem>
	</ul>
)

export default NavigationItems
