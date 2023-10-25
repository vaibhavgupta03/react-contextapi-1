import React, { useContext } from 'react'

import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <div className='text-yellow-300 text-xl font-serif'>Please Login</div>
    return <div className='text-yellow-300 text-xl font-serif'>Welcome {user.username}</div>
}

export default Profile
