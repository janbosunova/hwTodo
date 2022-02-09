import React from "react";
import { useEffect, useState } from "react";

export const TodoContext = React.createContext({
    data: [],
    setData: ()=>{},
    getTodoHandler: ()=>{}

})

const TodoContextProvider = (props)=>{
    const [data, setData] = useState([])

	const getTodoHandler = (newTodos) => {
		setData([...data, newTodos])
	}

	useEffect(()=>{
		const newData = JSON.parse(localStorage.getItem('todos'))
		setData(newData || [])
	}, [])

	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(data))
	}, [data])

    return(
        <TodoContext.Provider value={{data, setData, getTodoHandler}}>
            {props.children}

        </TodoContext.Provider>
    )

}
export default TodoContextProvider