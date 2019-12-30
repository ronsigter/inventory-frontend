import React, { useContext } from 'react'
import { StateContext } from '../Context'
import { Button } from 'antd'

const Footer = () => {
  const { state, dispatch } = useContext(StateContext)

  const totalCost = state.cart.map( order =>
    order.price*order.orderQuantity
    ).reduce( (accumulator, currentValue) =>
    accumulator + currentValue, 0
    ).toFixed(2)

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
        Total: ₱ {totalCost}
      </span>
    </div>
  )
}

export default Footer