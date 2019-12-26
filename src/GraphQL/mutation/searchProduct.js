import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

export const SEARCH_PRODUCT = gql`
mutation searchProduct($search: String!){
  searchProduct(search: $search){
    id
    title
    description
    quantity
    price
  }
}
`

export default () => {
  const [ SearchProduct, {loading, error} ] = useMutation(SEARCH_PRODUCT, {
    client
  })

  return{
    SearchProductLoading: loading,
    SearchProductError: error,
    SearchProduct
  }
}
