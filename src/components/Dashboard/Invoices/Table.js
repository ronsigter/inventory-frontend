import React, { useContext } from 'react'
import { StateContext } from '../Context'

import { Table, Input, Icon, Button } from 'antd'

export default () => {

  const { state } = useContext(StateContext)

  const columns = [
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNumber',
      key: 'invoiceNumber',
      align: 'center'
    },
    {
      title: 'Created By',
      dataIndex: 'user.firstName',
      key: 'user.firstName',
      align: 'center'
    }
  ]

  return (
    <Table
      size="middle"
      rowKey="id"
      bordered={true}
      columns={columns}
      dataSource={state.invoices}
      loading={state.loading}
    />
  )
}
