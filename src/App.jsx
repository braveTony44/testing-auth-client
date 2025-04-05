import './App.css'
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';

export const BASE_URL = import.meta.env.VITE_BASE_URL;
function App() {
  

  return (
    
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
