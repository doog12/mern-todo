import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./AuthPage/Login";
import Register from "./AuthPage/Register";
import MainPage from "./MainPage/MainPage";

export const useRoutes = (isLogin) => {
  if (isLogin) {
	  return (
		  <Routes>
			  <Route path="/auth" element={<Navigate to="/login" />} />
			  <Route path="/login" element={<Login />} />
			  <Route path="/registration" element={<Register />} />
			  <Route path="/" element={<MainPage />} />
			  <Route path='*' element={<Navigate to='/' />} />
		  </Routes>
	  )
  }

  return (
	  <Routes>
		  <Route path="/auth" element={<Navigate to="/login" />} />
		  <Route path="/login" element={<Login />} />
		  <Route path="/registration" element={<Register />} />
		  <Route path='*' element={<Navigate to='/login' />} />
	  </Routes>
  )

}