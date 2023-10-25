import React,{useState,useContext} from 'react'

import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
          <h1 className='text-3xl font-semibold text-white m-3 p-2'>Login</h1>
          <input type='text'
              placeholder="Enter username"
              className='bg-gray-200 text-black p-1 m-3 rounded-md'
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
          <input type='password'
              className='bg-gray-200 text-black py-1 px-2 m-3 rounded-md'
              value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
          <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md'
            onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
