import React, { useContext, useEffect } from 'react'
import './stocks.scss'

import Table from './Table'
import ItemData from './ItemData'

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
        <Table/>
      </div>
      <div className="right">
        <ItemData/>
      </div>
    </div>
  )
}

export default Stocks