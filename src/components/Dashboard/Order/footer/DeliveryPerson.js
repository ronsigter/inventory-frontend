import React, { useState, useContext } from 'react'
import { AutoComplete } from 'antd'
import { StateContext } from '../../Context'

export const DeliveryPerson = () => {
  const { state, dispatch } = useContext(StateContext)
  const deliveryPeople = state.deliveryPeople.map( person => `${person.firstName} ${person.lastName}` )

  const handleOnSelect = (value) => {
    const selectedDeliveryPerson = state.deliveryPeople.filter( person => {
      return `${person.firstName} ${person.lastName}` === value
    })

    dispatch({
      type: "updateSelectedDeliveryPerson",
      payload: selectedDeliveryPerson[0]
    })
  }

  return (
    <>
      <label>Delivery Person: </label>
      <AutoComplete
        dataSource={deliveryPeople}
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
