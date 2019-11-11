import React from 'react'
import './DrawerToggle.css'

const DrawerToggle = (props) => (
	<div
		onClick={props.toggleSideDrawer}
		className="DrawerToggle"
	>
		<div></div>
		<div></div>
		<div></div>
	</div>
)

export default DrawerToggle
