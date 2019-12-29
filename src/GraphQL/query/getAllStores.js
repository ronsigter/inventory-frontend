import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

const GET_ALL_STORES = gql`
query Stores{
  stores{
    id
    name
    address
  }
}
`

export default () => {
  const {loading, error, data} = useQuery(GET_ALL_STORES, {
    client
  })

  if (loading && !data) return {StoresLoading: loading, Stores: {}}

  return{
    StoresLoading: loading,
    StoresError: error,
    Stores: data.stores
  }
}
