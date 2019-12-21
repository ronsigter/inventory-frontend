import React, { useContext } from 'react'
import { StateContext } from '../Context'

import { Table } from 'antd'

export default () => {
  const { state, dispatch } = useContext(StateContext)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: title => <a onClick={ () => {
        console.log()
      }}>{title}</a>,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }
  ]

  return (
    <div className="table">
      <Table
        rowKey="id"
        columns={columns}
        dataSource={state.products}
        loading={state.loading}
        onRow={(record) => {
          return {
            onClick: () => {
              dispatch({
                type: "updateSelected",
                payload: record
              })
            }
          }
        }}
      />
    </div>
  )
}
