import React from 'react'
import './Modal.css'
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';

const Modal = (props) => {
	return (
		<Aux>
			<BackDrop show={props.show} clicked={props.onClose}/>
			<div
				className="Modal"
				style={{
					transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
					display: props.show ? true : 'none'
				}}
			>
				{props.children}
			</div>
		</Aux>

	)
};

export default Modal
