import React, { useContext, useEffect } from 'react'
import './order-table.scss'
import { StateContext } from '../Context'

import Table from './Table'

import getAllStores from '../../../GraphQL/query/getAllStores'


const Order = () => {
  const { Stores, StoresLoading } = getAllStores()
  const { dispatch } = useContext(StateContext)

  useEffect(() => {
    if(!StoresLoading){
      dispatch({
        type: "updateStores",
        payload: Stores
      })
    }
  }, [StoresLoading])

  return (
    <div id="divToPrint">
      <Table/>
    </div>
  )
}

export default Order