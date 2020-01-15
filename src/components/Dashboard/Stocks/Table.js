import React, { useContext } from 'react'
import { StateContext } from '../Context'

import { Table, Button, Icon } from 'antd'

export default () => {
  const { state, dispatch } = useContext(StateContext)

  const handleAddToCart = (record) => {
    const cart = state.cart
    cart.push({...record, orderQuantity: 1})
    dispatch({
      type: "updateCart",
      payload: cart
    })
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => <a onClick={ () => {
        dispatch({
          type: "updateSelectedProduct",
          payload: record
        })
      }}>{record.title}</a>,
      // ellipsis: true
    },
    {
      title: 'Stock',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) =>
        <span>
          ₱ {record.price.toFixed(2)}
        </span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          style={{backgroundColor: "#EFAF41"}}
          type="primary"
          onClick={() => handleAddToCart(record)}
        >Add to order
          <Icon type="shopping-cart" />
        </Button>
      ),
      align: 'center',
      width: 100
    }
  ]

  const products = () => {
    const addedToCart = new Set(state.cart.map( cart => cart.id))

    return state.products
    .filter( product => {
      return product.title.toLowerCase().indexOf(state.searchTerm.toLowerCase()) !== -1
    })
    .filter( product => !addedToCart.has(product.id))
  }

  return (
    <div className="table">
      <Table
        size="middle"
        rowKey="id"
        bordered={true}
        columns={columns}
        dataSource={products()}
        loading={state.loading}
        pagination={{ pageSize: 9 }}
      />
    </div>
  )
}
