import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
