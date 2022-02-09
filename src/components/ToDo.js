import React, {useContext}from 'react'
import Card from './UI/Card'
import classes from './ToDo.module.css'
import { TodoContext } from './store/todo-context'


const ToDo = () => {
	const { data, setData } = useContext(TodoContext)
	const deleteChangeHandler = (e) => {
		setData(data.filter((el) => el.id !== e.target.id))
	}

	const checkedHandler = (e) => {
		setData(
			data.map((el) => {
				if (el.id === e.target.id) {
					el.comleted = !el.comleted
				}
				return el
			}),
		)
	}
	return (
		<>
			<Card className = {classes.users}>
				<ul>
				{data.map((el) => (
					<li key={el.id}>
						<p className={el.comleted ? 'done' : 'form'}>
							{el.name}
						</p>
						
							<p>{el.date}</p>
						
						<input
							id={el.id}
							checked={el.comleted}
							onChange={checkedHandler}
							type='checkbox'
						/>
						<button id={el.id} onClick={deleteChangeHandler}>
							delete
						</button>
					</li>
				))}
				</ul>
				
			</Card>
		</>
	)
}

export default ToDo