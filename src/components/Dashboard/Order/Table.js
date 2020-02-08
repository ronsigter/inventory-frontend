import React, { useContext } from 'react'
import { StateContext } from '../Context'
import Header from './Header'
import Footer from './Footer'

import { Table, Input, Icon, Button } from 'antd'

export default () => {

  const { state, dispatch } = useContext(StateContext)
  const handleQuantityChange = (event, record) => {
    const updatedCart = state.cart.map( order => {
      if(order.id === record.id) {
        return {...record, orderQuantity: parseInt(event.target.value)}
      } else return order
    })
    dispatch({
      type: "updateCart",
      payload: updatedCart
    })
  }

  const removeItem = (record) => {
    const cart = state.cart.filter( order => {
      return order.id !== record.id
    })
    dispatch({
      type: "updateCart",
      payload: cart
    })
  }

  const columns = [
    {
      title: 'Quantity',
      dataIndex: 'orderQuantity',
      key: 'orderQuantity',
      render: (text, record) =>
        <Input
          size="large"
          type="number"
          onChange={(e) => handleQuantityChange(e,record)}
          value={record.orderQuantity}
        />,
      align: 'center'
    },
    {
      title: 'Description',
      dataIndex: 'title',
      key: 'title',
      align: 'center'
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) =>
        <span>
          ₱ {record.price.toFixed(2)}
        </span>,
      align: 'center'
    },
    {
      title: 'Amount',
      dataIndex: 'title',
      key: 'total',
      render: (text, record) => <span>₱ {
        (record.orderQuantity*record.price).toFixed(2)
      }</span>,
      align: 'center'
    },
    {
      title: '',
      key: 'action',
      render: (text, record) =>
        <Button type="danger" onClick={() => removeItem(record)}>
          <Icon type="delete" />
        </Button>,
      align: 'center',
      width: 70
    }
  ]

  return (
    <Table
      size="middle"
      rowKey="id"
      title={() => <Header/>}
      footer={() => <Footer/>}
      bordered={true}
      columns={columns}
      dataSource={state.cart}
      loading={state.loading}
      pagination={{ pageSize: 10 }}
      pagination={false}
      scroll={{ y: 'calc(100vh - 4em)' }}
    />
  )
}
