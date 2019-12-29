import React, { useContext, useEffect } from 'react'
import './stocks.scss'

import Table from './Table'
import ItemFunctions from './ItemFunctions'
import Order from '../Order'

import { StateContext } from '../Context'
import getAllProducts from '../../../GraphQL/query/getAllProducts'

const Stocks = () => {
  const { Products, ProductsLoading } = getAllProducts()
  const { dispatch } = useContext(StateContext)

  useEffect(() => {
    if(!ProductsLoading){
      dispatch({
        type: "updateProducts",
        payload: {
          loading: ProductsLoading,
          products: Products
        }
      })
    }
  }, [ProductsLoading])

  return (
    <div className="stocks-container">
      <div className="left">
        <ItemFunctions/>
        <Table/>
      </div>
      <div className="right">
        <Order/>
      </div>
    </div>
  )
}

export default Stocks