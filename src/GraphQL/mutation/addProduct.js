import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

export const ADD_PRODUCT = gql`
mutation createProduct($title: String!, $description: String!, $price: Float!, $quantity: Float!){
  createProduct(title: $title, description: $description, price: $price, quantity: $quantity){
    id
    title
    description
    quantity
    price
  }
}
`

export default () => {
  const [ AddProduct, {loading, error} ] = useMutation(ADD_PRODUCT, {
    client
  })

  return{
    AddProductLoading: loading,
    AddProductError: error,
    AddProduct
  }
}
