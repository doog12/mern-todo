import Navbar from 'Components/Navbar/Navbar';
import React from 'react'
import {useAuth} from "./hooks/auth.hooks";
import {AuthContext} from "./context/AuthContext";
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./Pages/routes";

function App() {
	const {login, logout, token, userId, isReady} = useAuth()
	const isLogin = !!token
	const routes = useRoutes(isLogin)
	return (
		<AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin}}>
			<BrowserRouter>
				<div className="App">
					<Navbar/>
					{ routes }
				</div>
			</BrowserRouter>
		</AuthContext.Provider>

	);
}

export default App;
