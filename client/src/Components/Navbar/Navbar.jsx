import React, {useContext} from 'react'
import './Navbar.scss'
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function Navbar() {
	const {isLogin, logout} = useContext(AuthContext)
	return (
		<header>
			<nav>
				<div className="nav-wrapper navbar black">
					<a href="/" className="brand-logo">
						Mern Todo
					</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							{
								!isLogin
									? <Link to="/login">Войти</Link>
									: <Link to="/" onClick={logout}>Выйти</Link>
							}
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
