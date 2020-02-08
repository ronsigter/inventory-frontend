import React, { useState, useContext } from 'react'
import { AutoComplete } from 'antd'
import { StateContext } from '../../Context'

export const Salesperson = () => {
  const { state, dispatch } = useContext(StateContext)
  const salesPeople = state.salesPeople.map( person => `${person.firstName} ${person.lastName}` )

  const handleOnSelect = (value) => {
    const selectedSalesPerson = state.salesPeople.filter( person => {
      return `${person.firstName} ${person.lastName}` === value
    })

    dispatch({
      type: "updateSelectedSalesPerson",
      payload: selectedSalesPerson[0]
    })
  }

  return (
    <>
      <label>Salesperson: </label>
      <AutoComplete
        dataSource={salesPeople}
        style={{ width: "70%" }}
        placeholder="Choose a Salesperson"
        filterOption={(inputValue, option) =>
          option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
        onSelect={handleOnSelect}
      />
    </>
  )
}
