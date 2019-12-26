import React, { useState, useContext } from 'react'
import { Input } from 'antd'
import searchProduct from '../../../GraphQL/mutation/searchProduct'

import { useSearchForm } from '../../../forms/useSearchForm'
import { StateContext } from '../Context'

const { Search } = Input

const SearchProduct = () => {
  const { dispatch } = useContext(StateContext)

  return (
    <Search
      placeholder="Search Product"
      enterButton={true}
      onSearch={value => {
        dispatch({
          type: "updateSearch",
          payload: value
        })
      }}
      style={{ width: '50%' }}
    />
  )
}

export default SearchProduct