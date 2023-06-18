import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/Register'
import './index.css';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import UsersPage from './pages/Users';
import CreatePage from './pages/Create';
import ProfilePage from './pages/Profile';
import LogoutPage from './pages/Logout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/register' exact Component={RegisterPage} />
      <Route path='/login' exact Component={LoginPage} />
      <Route path='/dashboard' exact Component={Dashboard}/>
      <Route path='/users' exact Component={UsersPage}/>
      <Route path='/create' exact Component={CreatePage}/>
      <Route path='/profile' exact Component={ProfilePage}/>
      <Route path='/logout' exact Component={LogoutPage}/>
    </Routes>
  )
}

export default App
