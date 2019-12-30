import React, { useContext, useEffect } from 'react'
import Table from './Table'
import getAllInvoices from '../../../GraphQL/query/getAllInvoices'
import { StateContext } from '../Context'


const Invoices = () => {
  const { Invoices, InvoicesLoading } = getAllInvoices()
  const { dispatch } = useContext(StateContext)

  useEffect(() => {
    if(!InvoicesLoading){
      dispatch({
        type: "updateInvoices",
        payload: Invoices
      })
    }
  }, [InvoicesLoading])

  return (
    <div>
      <Table/>
    </div>
  )
}

export default Invoices