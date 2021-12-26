import React, {useCallback, useContext, useEffect, useState} from 'react';
import './MainPage.scss'
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";


const MainPage = () => {
	const [tasks, setTasks] = useState([])

	const [value, setValue] = useState('')

	const {userId} = useContext(AuthContext)



	// ================= GET TASKS ====================
	const getTodo = useCallback(async () => {
		try {
			await axios.get('/api/todo', {
				headers: {
					'Content-Type': 'application/json'
				},
				params: {userId}
			})
			.then(response => {
				setTasks(response.data);
			})
		} catch (e) {
			console.log(e)
		}
	} , [userId])

	useEffect(() => {
		getTodo()
	}, [getTodo])

	// ==================================================


	// ================ CREATE TASK =====================
	const createTodo = useCallback(async () => {
		try {
			await axios.post('/api/todo/add', {value, userId}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					setTasks([...tasks,  response.data])
					setValue('')
					getTodo()
				} )
		} catch (e) {
			console.log(e)
		}
	}, [value, userId, tasks, getTodo])
	// ==================================================


	// ================ COMPLETE TASK ===================
	const completeTodo = useCallback(async (id) => {
		try {
		    await axios.put(`/api/todo/complete/${id}`, {id}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => {
					getTodo()
				})
		} catch(e) {
		    console.log(e)
		}
	}, [getTodo])
	// ==================================================


	// ================= DELETE TASK ====================
	const removeTodo = useCallback(async (id) => {
		try {
			await axios.delete(`/api/todo/delete/${id}`, {data: {id}})
				.then(() => getTodo())
		} catch(e) {
			console.log(e)
		}
	}, [getTodo])
	// ===================================================

	return (
		<div className="main-page">
			<form className="form form-login" onSubmit={e => e.preventDefault()}>
				<div className="input-field inline main-page__input">
					<input id="text" type="text" className="validate" value={value}
						   onChange={(e) => setValue(e.target.value)}/>
					<label htmlFor="text">Enter a new task here</label>
				</div>

				{/*ADD BTN*/}
				<button className="btn-floating btn-large waves-effect waves-light red main-page__add__btn"
						onClick={() => createTodo()}><i
					className="material-icons">add</i></button>


				<div className="todo-list card">
					<div className="header light-blue darken-2 white-text">
						<span>ToDo List</span>
					</div>


					{
						tasks.map((task, index) => (
							<div className={`item ${task.completed === true ? "completed" : ""}`}
								 key={`${task.text}__${index}`}>
								<div>
									<input readOnly checked={task.completed === true ? "checked" : ""} type="checkbox"
										   className="todo__input"/>
									<span onClick={() => completeTodo(task._id)}>{task.text}</span>
								</div>
								<div>
									<span className="todo-trash" onClick={() => removeTodo(task._id)}><i
										className="fas fa-trash-alt"/></span>
								</div>
							</div>
						))
					}


					{/*==================================================================================*/}

				</div>


				{/* TODO: Add Buttons Clear All && Done All */}
				{/*<button className="waves-effect waves-light light-blue darken-2 btn filter-btn"*/}
				{/*		onClick={() => 0}>Done All*/}
				{/*</button>*/}
				{/*<button className="waves-effect waves-light light-blue darken-2 btn filter-btn"*/}
				{/*		onClick={() => 0}>Clear All*/}
				{/*</button>*/}

				<div>
				</div>
			</form>
		</div>
	);
};

export default MainPage;