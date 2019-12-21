import React, { useState } from 'react'
import { logoutThisUser, isLogin } from '../utils'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {
  const [login, setLogin] = useState(isLogin())

  const handleLogout = () => {
    logoutThisUser()
    setLogin(false)
  }

  return (
    <div>
      <h1>Home</h1>
        {login ?
          <button onClick={handleLogout}>Click Here to log out</button>
          : <Redirect to ='/signin'/>
        }
    </div>
  )
}

export default Dashboard