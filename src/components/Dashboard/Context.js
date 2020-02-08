import React, { createContext, useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case "updateSearch":
      return { ...state, searchTerm: action.payload}
    case "updateCart":
      return { ...state, cart: action.payload}
    case "updateInvoices":
      return { ...state, invoices: action.payload}

    case "updateProducts":
      return { ...state, ...action.payload }
    case "updateSelectedProduct":
      return { ...state, selectedProduct: action.payload }

    case "updateStores":
      return { ...state, stores: action.payload}
    case "updateSelectedStore":
      return { ...state, selectedStore: action.payload}

    case "updateSalesPeople":
      return { ...state, salesPeople: action.payload}
    case "updateSelectedSalesPerson":
      return { ...state, selectedSalesPerson: action.payload }

    case "updateDeliveryPeople":
      return { ...state, deliveryPeople: action.payload}
    case "updateSelectedDeliveryPerson":
      return { ...state, selectedDeliveryPerson: action.payload }


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
  selectedStore: {},
  invoices: [],
  salesPeople: [],
  selectedSalesPerson: {},
  deliveryPeople: [],
  selectedDeliveryPerson: {},
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