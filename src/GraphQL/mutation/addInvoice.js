import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

export const ADD_INVOICE = gql`
mutation createInvoice($invoiceNumber: String!, $storeId: ID!, $productIds: [ID!]!){
  createInvoice(invoiceNumber: $invoiceNumber, storeId: $storeId, productIds: $productIds){
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
    products{
      id
      title
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
