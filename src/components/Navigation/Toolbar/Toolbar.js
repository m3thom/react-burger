import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrowerToggle/DrowerToggle';

const Toolbar = (props) => {
	return (
		<header className="Toolbar">
			<DrawerToggle
				toggleSideDrawer={props.toggleSideDrawer}
			/>
			<div className="DesktopLogo">
				<Logo />
			</div>
			<nav className="DesktopOnly">
				<NavigationItems />
			</nav>
		</header>
	)
};

export default Toolbar
