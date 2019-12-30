import React, { useState } from 'react'
import './dashboard.scss'
import { StateProvider } from './Context'
import { logoutThisUser, isLogin, userDetails } from '../../utils'
import { Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import Stocks from './Stocks/'
import Invoices from './Invoices/'
import DR from './DR/'

const { Header, Content, Footer } = Layout
const { SubMenu } = Menu

const Dashboard = () => {
  const [login, setLogin] = useState(isLogin())
  const [currentTab, setCurrentTab] = useState('stocks')
  const [loggedInUser] = useState(userDetails() ? userDetails().firstName : "")

  const handleLogout = () => {
    logoutThisUser()
    setLogin(false)
  }

  const handleChangeTab = (event) => {
    setCurrentTab(event.key)
  }

  return (
    <StateProvider>
      {login ?
        <Layout className="dashboard-container" style={{height:"100vh"}}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[currentTab]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="stocks" onClick={handleChangeTab}>View Stocks</Menu.Item>
              <Menu.Item key="invoices" onClick={handleChangeTab}>View Invoices</Menu.Item>
              <Menu.Item key="dr" onClick={handleChangeTab}>Process DR</Menu.Item>
              <SubMenu
                title={
                  <span className="submenu-title-wrapper">
                    {loggedInUser}
                  </span>
                }
                style={{float: 'right'}}
              >
                <Menu.Item>View Profile</Menu.Item>
                <Menu.Item onClick={handleLogout}>Sign Out</Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', height: '100%' }}>
            <div style={{ background: '#fff', padding: 24, height: '100%' }}>
              {
                currentTab === 'stocks' ? <Stocks/> :
                currentTab === 'invoices' ? <Invoices/> :
                currentTab === 'dr' ? <DR/> :
                null
              }
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Inventory System ©2020 Created by Tumetechnic</Footer> */}
        </Layout>
        : <Redirect to ='/signin'/>
      }
    </StateProvider>
  )
}

export default Dashboard