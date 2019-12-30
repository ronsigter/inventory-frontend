import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

const GET_ALL_INVOICES = gql`
query Invoices{
  invoices{
    id
    invoiceNumber
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
  const {loading, error, data} = useQuery(GET_ALL_INVOICES, {
    client
  })

  if (loading && !data) return {InvoicesLoading: loading, Invoices: {}}

  return{
    InvoicesLoading: loading,
    InvoicesError: error,
    Invoices: data.invoices
  }
}
