import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import client from '../config/apolloClient'

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
  login(email: $email, password: $password){
    status
    user{
      id
      email
      firstName
      lastName
      authenticationToken
    }
  }
}
`

export default () => {
  const [ login, {loading, error} ] = useMutation(LOGIN_USER, {
    client
  })

  return{
    LoginLoading: loading,
    LoginError: error,
    login
  }
}
