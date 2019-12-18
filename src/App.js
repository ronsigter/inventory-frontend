import React from 'react';
import Products from './components/users/products/'
import { getLocalData } from './helpers/LocalStorage'
import strings from './helpers/Strings'

export default () => {
  if(!getLocalData(strings.USER_TOKEN)) window.location = `/login`

  return (
    <Products/>
  )
}
