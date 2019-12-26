import React, { createContext, useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case "updateProducts":
      return { ...state, ...action.payload }
    case "updateSelected":
      return { ...state, selectedProduct: action.payload }
    case "updateSearch":
      return { ...state, searchTerm: action.payload}
    default:
      return
  }
}

const initialState = {
  loading: true,
  products: [],
  selectedProduct: {},
  searchTerm: ""
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