import React, { Component } from 'react'
import './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Aux from '../Aux/Aux';

class Layout extends Component {
	state = {
		isSideDrawerOpen: false,

	}
	toggleSideDrawerOpenHandler = () => {
		this.setState(state => {
			return { isSideDrawerOpen: !state.isSideDrawerOpen }
		})
	}
	render() {
		const { isSideDrawerOpen } = this.state
		return (
			<Aux>
				<Toolbar
					toggleSideDrawer={this.toggleSideDrawerOpenHandler}
					isSideDrawerOpen={isSideDrawerOpen}
				/>
				<SideDrawer
					toggleSideDrawer={this.toggleSideDrawerOpenHandler}
					isSideDrawerOpen={isSideDrawerOpen}
				/>
				<main className="Content">
					{this.props.children}
				</main>
			</Aux>
		);
	};
}
export default Layout