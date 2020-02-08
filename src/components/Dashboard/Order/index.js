import React, { useContext, useEffect } from 'react'
import './order-table.scss'
import { StateContext } from '../Context'

import Table from './Table'

import getAllStores from '../../../GraphQL/query/getAllStores'
import getAllSalesPeople from '../../../GraphQL/query/getAllSalesPeople'
import getAllDeliveryPeople from '../../../GraphQL/query/getAllDeliveryPeople'

const Order = () => {
  const { Stores, StoresLoading } = getAllStores()
  const { SalesPeople, SalesPeopleLoading } = getAllSalesPeople()
  const { DeliveryPeople, DeliveryPeopleLoading } = getAllDeliveryPeople()

  const { dispatch } = useContext(StateContext)

  useEffect(() => {
    if(!StoresLoading){
      dispatch({
        type: "updateStores",
        payload: Stores
      })
    }
  }, [StoresLoading])


  useEffect(() => {
    if(!SalesPeopleLoading){
      dispatch({
        type: "updateSalesPeople",
        payload: SalesPeople
      })
    }
  }, [SalesPeopleLoading])

  useEffect(() => {
    if(!DeliveryPeopleLoading){
      dispatch({
        type: "updateDeliveryPeople",
        payload: DeliveryPeople
      })
    }
  }, [DeliveryPeopleLoading])

  return (
    <div id="divToPrint">
      <Table/>
    </div>
  )
}

export default Order