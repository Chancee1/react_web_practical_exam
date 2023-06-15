import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/Register'
import './index.css';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/register' exact Component={RegisterPage} />
      <Route path='/login' exact Component={LoginPage} />
      <Route path='/dashboard' exact Component={Dashboard}/>
    </Routes>
  )
}

export default App
