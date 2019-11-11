import React, { Component } from 'react'
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrapedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		}
		componentDidMount() {
			this.reqInt = axios.interceptors.request.use(req => {
				this.setState({ error: null })
				return req
			})
			this.resInt = axios.interceptors.response.use(req => req, error => {
				this.setState({ error })
			});
		}
		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInt)
			axios.interceptors.response.eject(this.resInt)
		}
		confirmedErrorHandler = () => {
			this.setState({ error: null })
		}
		render() {
			const { error } = this.state

			return (
				< Aux >
					<Modal
						show={error}
						onClose={this.confirmedErrorHandler}
					>
						{error ? error.message : null}
					</Modal>
					<WrapedComponent {...this.props} />
				</Aux >
			)
		}
	}
}

export default withErrorHandler
