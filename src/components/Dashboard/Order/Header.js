import React, { useContext } from 'react'
import { Input, AutoComplete } from 'antd'
import { StateContext } from '../Context'

const Header = () => {
  const { state, dispatch } = useContext(StateContext)

  const stores = state.stores.map( store => store.name )

  const dateToday = new Date().toLocaleDateString(
    "en-US",
    { weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  )

  return (
    <div className="receipt-container">
      <div className="header">
        <h1>Gerald G. Castañeda Marketing</h1>
        <p>Magalang, Pampanga</p>
      </div>
      <div className="date-container">
        <h1 className="title">DELIVERY RECEIPT</h1>
        <div className="date">
          Date: <span>{ dateToday }</span>
        </div>
      </div>
      <div className="delivery">
        <div className="details">
          <label>Deliver to: </label>
          <AutoComplete
            dataSource={stores}
            style={{ width: "70%" }}
            placeholder="Select store here"
            filterOption={(inputValue, option) =>
              option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
            onSelect={
              (value) => {
                const selectedStore = state.stores.filter( store => {
                  return store.name === value
                })

                dispatch({
                  type: "updateSelectedStore",
                  payload: selectedStore[0]
                })
              }
            }
          />
        </div>
        <div className="details">
          <label>Address: </label>
          <Input
            style={{ width: "70%" }}
            disabled={true}
            value={state.selectedStore ? state.selectedStore.address : ""}
          />
        </div>
      </div>
    </div>
  )
}

export default Header