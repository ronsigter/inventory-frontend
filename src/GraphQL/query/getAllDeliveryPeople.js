import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import client from '../../config/apolloClient'

const GET_ALL_DELIVERY_PEOPLE = gql`
query DeliveryPeople{
  deliveryPeople{
    id
    firstName
    lastName
  }
}
`

export default () => {
  const {loading, error, data} = useQuery(GET_ALL_DELIVERY_PEOPLE, {
    client
  })

  if (loading && !data) return {DeliveryPeopleLoading: loading, DeliveryPeople: {}}

  return{
    DeliveryPeopleLoading: loading,
    DeliveryPeopleError: error,
    DeliveryPeople: data.deliveryPeople
  }
}
