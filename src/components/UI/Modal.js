import React from 'react'
import Card from './Card'
import classes from './modal.module.css'

const Modal = (props) => {
	return (
		<div onClick={props.confirm} className = {classes.backdrop} >
			<Card className={classes.modal}>
				<header className={classes.header}>{props.title}</header>
				<div className={classes.content}>{props.message}</div>
				<footer className={classes.actions}>
					<button onClick={props.confirm} key={Math.random()}>
						ok
					</button>
				</footer>
			</Card>
		</div>
	)
}

export default Modal
