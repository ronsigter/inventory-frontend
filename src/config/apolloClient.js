import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getLocalData } from '../helpers/LocalStorage'
import strings from '../helpers/Strings'

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:4001/graphql`,
  headers: {
    'X-User-Email': getLocalData(strings.USER_EMAIL),
    'X-User-Token': getLocalData(strings.USER_TOKEN)
  },
  cache: new InMemoryCache()
})



export default client
