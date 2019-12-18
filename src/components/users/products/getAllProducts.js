import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import client from '../../../config/apolloClient'

export const GET_ALL_PRODUCTS = gql`
query Products{
  products{
    id
    title
    description
    quantity
    price
  }
}
`

export default () => {
  const {loading, error, data} = useQuery(GET_ALL_PRODUCTS, {
    client
  })

  if (loading && !data) return {ProductsLoading: loading, Products: {}}

  return{
    ProductsLoading: loading,
    ProductsError: error,
    Products: data.products
  }
}
