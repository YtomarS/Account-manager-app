import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './DashBoard'


function App() {
  return (
    <div className='w-full h-screen bg-black'>

      
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} /> 
      </Routes> 

    </div>
  )
}

export default App
