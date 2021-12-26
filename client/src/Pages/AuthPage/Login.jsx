import axios from 'axios'
import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './AuthPage.scss'
import {AuthContext} from "../../context/AuthContext";

function Login() {

	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const { login } = useContext(AuthContext)

	const changeHandler = (e) => {
		setForm({...form, [e.target.name]: e.target.value})

	}

  const loginHandler = () => {
		try {
			axios.post('/api/auth/login', {...form}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(response => {
				login(response.data.token, response.data.userId)
			})
		} catch (err) {
			console.log(err)
		}
	}
	
	return (
		<React.Fragment>
            <div className="container">
              <div className="auth-page">
                <h3>Авторизация</h3>
                <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="email" name="email" className="validate" autoComplete="OFF" onChange={changeHandler} />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input type="password" name="password" className="validate" autoComplete="OFF" onChange={changeHandler} />
                      <label htmlFor="password">Пароль</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="waves-effect waves-light btn blue" onClick={loginHandler}>Войти</button>
					<Link to="/registration" className="btn-outline btn-reg">Нет аккаунта ?</Link>
                  </div>
                </form>
              </div>
            </div>
          </React.Fragment>
	)
}

export default Login
