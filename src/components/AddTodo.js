import React, { useContext, useReducer } from 'react'
import Card from './UI/Card'
import Modal from './UI/Modal'
import classes from './AddTodo.module.css'
import {TodoContext } from './store/todo-context'

const todosReducer = (state, action) => {
	if (action.type === 'USER_NAME') {
		return {
			value: action.value,
			date: new Date().toLocaleDateString(),
			comleted: false,
			isValid: null,
		}
	}
	if (action.type === 'INPUT') {
		return {
			isValid: {
				title: 'ошибка',
				message: 'Пожалуйста, заполните это поле! ',
			},
		}
	}
	if (action.type === 'INPUT_OK') {
		return {
			value: '',
			isValid: null,
		}
	}

	return {
		value: state.value,
		date: new Date().toString(),
		isValid: null,
	}
}
const AddTodo = () => {
    const {getTodoHandler} = useContext(TodoContext)
	const [form, dispatchform] = useReducer(todosReducer, {
		value: '',
		date: new Date().toString(),
		isValid: null,
	})

	const todoChangeHandler = (e) => {
		dispatchform({
			type: 'USER_NAME',
			value: e.target.value,
		})
	}

	const sumbitChangeHandler = (e) => {
		e.preventDefault()
		if (form.value.trim() === '') {
			dispatchform({
				type: 'INPUT',
			})
			return
		}
		const newTodos = {
			name: form.value,
			date: form.date,
			id: Math.random().toString(),
			comleted: false,
		}

		getTodoHandler(newTodos)
		dispatchform({
			type: 'INPUT_OK',
		})
	}

	const modalHandler = () => {
		dispatchform({
			type: 'INPUT_OK',
		})
	}

	return (
		<>
			<Card className={classes.input}>
				<h1>Todo App</h1>
				<form onSubmit={sumbitChangeHandler}>
					<div>
						<input
							type='text'
							value={form.value}
							onChange={todoChangeHandler}
							placeholder='Заполните ...'
						/>
					</div>
					<button type='sumbit'>Добавить</button>
				</form>
			</Card>
			{form.isValid && (
				<Modal
					title={form.isValid.title}
					message={form.isValid.message}
					confirm={modalHandler}
				/>
			)}
		</>
	)
}

export default AddTodo
