import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthPage.scss'

function Register() {
	const [form, setForm] = useState({
		email: '',
		password: ''
	})

	const changeHandler = (e) => {
		setForm({...form, [e.target.name]: e.target.value})
		console.log(form)
	}

	const registerHandler = () => {
		try {
			axios.post('/api/auth/registration', {...form}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<React.Fragment>
            <div className="container">
              <div className="auth-page">

                <h3>Регистрация</h3>
                <form className="form form-login" onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input type="email" autoComplete="OFF" name="email" className="validate" onChange={changeHandler} />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input type="password" autoComplete='OFF' name="password" className="validate" onChange={changeHandler} />
                      <label htmlFor="password">Пароль</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="waves-effect waves-light btn blue" onClick={registerHandler} >
                      Зарегистрироваться
                    </button>
					<Link to="/login" className="btn-outline btn-reg">Уже есть аккаунт ?</Link>
                  </div>
                </form>
              </div>
            </div>
          </React.Fragment>
	)
}

export default Register
