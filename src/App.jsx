import { useState } from 'react'
import Login from './components/Login'
import './index.css'


function App() {
  const API = 'http://139.5.146.186/api/auth/login'
  const [user,setUser] = useState({})
  const [input,setInput] = useState({
    email : '',
    password : ''
})


  return (
    <div className='w-full border border-white '>
     <Login API = {API} user={user}  setUser={setUser} input={input} setInput={setInput}/>
    </div>
  )
}

export default App
