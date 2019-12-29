import React, { createContext, useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case "updateProducts":
      return { ...state, ...action.payload }
    case "updateSelectedProduct":
      return { ...state, selectedProduct: action.payload }
    case "updateSearch":
      return { ...state, searchTerm: action.payload}
    case "updateCart":
      return { ...state, cart: action.payload}
    case "updateStores":
      return { ...state, stores: action.payload}
    case "updateSelectedStore":
      return { ...state, selectedStore: action.payload}
    default:
      return
  }
}

const initialState = {
  loading: true,
  products: [],
  selectedProduct: {},
  searchTerm: "",
  cart: [],
  stores: [],
  selectedStore: {}
}

const StateContext = createContext(initialState)

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  )
}

export { StateContext, StateProvider }