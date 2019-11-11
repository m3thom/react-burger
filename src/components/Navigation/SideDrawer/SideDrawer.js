import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css'
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux/Aux';


const SideDrawer = (props) => {
	const sideDrawerClass = `SideDrawer ${props.isSideDrawerOpen ? "Open" : "Close"}`
	
	return (
		<Aux>
			<BackDrop
				show={props.isSideDrawerOpen}
				clicked={props.toggleSideDrawer}
			/>
			<div className={sideDrawerClass}>
				<div className="MobileLogo">
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>

	)
}

export default SideDrawer
