import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

export const ADD_INVOICE = gql`
mutation createInvoice($invoiceNumber: String!, $storeId: ID!, $deliveryPersonId: ID!, $salesPersonId: ID!, $products: [OrderForm!]!){
  createInvoice(invoiceNumber: $invoiceNumber, storeId: $storeId, deliveryPersonId: $deliveryPersonId, salesPersonId: $salesPersonId, products: $products){
    id
    user{
      id
      firstName
    }
    store{
      id
      name
      address
    }
    orders{
      id
      product
      quantityBought
      price
      total
    }
    orders{
      id
      product
      quantityBought
      price
      total
    }
    salesPerson{
      id
      firstName
      lastName
    }
    deliveryPerson{
        id
        firstName
        lastName
    }
  }
}
`

export default () => {
  const [ AddInvoice, {loading, error} ] = useMutation(ADD_INVOICE, {
    client
  })

  return{
    AddInvoiceLoading: loading,
    AddInvoiceError: error,
    AddInvoice
  }
}
