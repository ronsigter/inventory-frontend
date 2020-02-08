import React, { useState, useContext } from 'react'
import { AutoComplete } from 'antd'
import { StateContext } from '../../Context'

export const DeliveryPerson = () => {
  const { state, dispatch } = useContext(StateContext)
  const stores = state.stores.map( store => store.name )

  const handleOnSelect = (value) => {
    const selectedStore = state.stores.filter( store => {
      return store.name === value
    })

    dispatch({
      type: "updateSelectedStore",
      payload: selectedStore[0]
    })
  }

  return (
    <>
      <label>Delivery Person: </label>
      <AutoComplete
        dataSource={stores}
        style={{ width: "70%" }}
        placeholder="Choose delivery person"
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={handleOnSelect}
      />
    </>
  )
}
