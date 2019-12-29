import React, { useContext } from 'react'
import { StateContext } from '../Context'
import { Button } from 'antd'

const Footer = () => {
  const { state, dispatch } = useContext(StateContext)

  return (
    <div className="footer-container">
      <Button
        onClick={ () => {
          dispatch({
            type: "updateCart",
            payload: []
          })
        }}
      >CLEAR
      </Button>
      <span className="order-total">
        Total: ₱ {
          state.cart.map( order =>
            order.price*order.orderQuantity
          ).reduce( (accumulator, currentValue) =>
            accumulator + currentValue
          , 0).toFixed(2)
        }
      </span>
    </div>
  )
}

export default Footer