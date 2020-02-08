import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

const GET_ALL_SALES_PEOPLE = gql`
query SalesPeople{
  salesPeople{
    id
    firstName
    lastName
  }
}
`

export default () => {
  const {loading, error, data} = useQuery(GET_ALL_SALES_PEOPLE, {
    client
  })

  if (loading && !data) return {SalesPeopleLoading: loading, SalesPeople: {}}

  return{
    SalesPeopleLoading: loading,
    SalesPeopleError: error,
    SalesPeople: data.salesPeople
  }
}
