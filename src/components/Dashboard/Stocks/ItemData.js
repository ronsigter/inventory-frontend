import React, { useContext } from 'react'
import { StateContext } from '../Context'

const ItemData = () => {
  const { state, dispatch } = useContext(StateContext)
  return (
    <div>
      {
        state.loading?
        "Loading"
        : <div>
          <p>Product: {state.selectedProduct.title}</p>
          <p>Quantity: {state.selectedProduct.quantity}</p>
          <p>Price: {state.selectedProduct.price}</p>
        </div>
      }
    </div>
  )
}

export default ItemData