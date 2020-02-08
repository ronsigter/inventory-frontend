import React, { useContext } from 'react'
import { StateContext } from '../Context'
import { Button } from 'antd'

import { PreparedBy } from './footer/PreparedBy'
import { Salesperson } from './footer/Salesperson'
import { DeliveryPerson } from './footer/DeliveryPerson'


const Footer = () => {
  const { state, dispatch } = useContext(StateContext)

  const totalCost = state.cart.map( order =>
    order.price*order.orderQuantity
    ).reduce( (accumulator, currentValue) =>
    accumulator + currentValue, 0
    ).toFixed(2)

  return (
    <div className="footer-container">
      <div className="total">
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
      <div className="item">
        <PreparedBy/>
      </div>
      <div className="item">
        <DeliveryPerson/>
      </div>
      <div className="item">
        <Salesperson/>
      </div>
    </div>
  )
}

export default Footer