import React,{ useState } from 'react'
import './login.scss'
import { Input, Icon, Button, Alert } from 'antd'
import { useLoginForm } from '../../forms/useLoginForm'
import loginUser from '../../GraphQL/mutation/loginUser'
import { loginThisUser } from '../../utils'

const SignIn = (props) => {

  const [show, setShow] = useState(false)
  const { login } = loginUser()
  const handleLogin = (values) => {
    login({ variables: {
      email: values.email,
      password: values.password
    }}).then( result => {
      const loginData = result.data.login
      if(loginData.user && loginData.status === "authorized"){
        loginThisUser(loginData.user)
        props.history.push('/')
      } else {
        setShow(true)
        setTimeout(() => {
          setShow(false);
        }, 3000);
      }
    })
  }

  const { handleSubmit, handleChange, values } = useLoginForm(handleLogin, {
    email: "",
    password: ""
  })

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        {
          show ?
            <Alert banner message="Email or Password is incorrect" type="error" showIcon/>
            : null
        }
        <div className="header">
          <Icon type="rocket"/>
          <p>Inventory System</p>
        </div>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          required
        />
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
          value={values.password}
          name="password"
          onChange={handleChange}
          required
        />
        <Button type="primary" size="large" block={true} htmlType="submit">Login</Button>
      </form>
    </div>
  )
}

export default SignIn