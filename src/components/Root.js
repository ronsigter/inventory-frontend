import React, { useState } from 'react'
import { logoutThisUser, isLogin } from '../utils'
import { Link } from 'react-router-dom'

const Root = ( props ) => {
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
        : <Link to="/signin">Go to sign in page</Link>
      }
    </div>
  )
}

export default Root