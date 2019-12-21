import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getLocalData } from '../helpers/LocalStorage'
import strings from '../helpers/Strings'

const LOGIN_DATA = getLocalData(strings.LOGIN_DATA)

const client = new ApolloClient({
  uri: `http://${window.location.hostname}:4000/graphql`,
  headers: {
    'X-User-Email': LOGIN_DATA ? LOGIN_DATA.email : null,
    'X-User-Token': LOGIN_DATA ? LOGIN_DATA.authenticationToken : null
  },
  cache: new InMemoryCache()
})



export default client
