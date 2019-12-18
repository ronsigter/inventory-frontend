import React from 'react'
import { Input, Icon, Button } from 'antd'
import { useLoginForm } from './useLoginForm'
import loginUser from './loginUser'
import { storeLocalData, getLocalData } from '../helpers/LocalStorage'
import strings from '../helpers/Strings'

export default function Login() {
  if(getLocalData(strings.USER_TOKEN)) window.location = `/`

  const { login } = loginUser()

  const loginSubmit = (values) => {
    login({ variables: {
      email: values.email,
      password: values.password
    }}).then( result => {
      const login = result.data.login
      if(login.user && login.status === "authorized"){
        storeLocalData(strings.USER_TOKEN, login.user.authenticationToken)
        storeLocalData(strings.USER_EMAIL, login.user.email)
        storeLocalData(strings.USER, login.user)
        window.location = `/`
      } else {
        console.log("Invalid email or password!")
      }
    })
  }

  const { handleSubmit, handleChange, values } = useLoginForm(loginSubmit, {
    email: "",
    password: ""
  })

  return (
    <div>
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="email"
        value={values.email}
        name="email"
        onChange={handleChange}
      />
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder="Password"
        value={values.password}
        name="password"
        onChange={handleChange}
      />
      <Button type="primary" onClick={handleSubmit}>Login</Button>
    </div>
  )
}
