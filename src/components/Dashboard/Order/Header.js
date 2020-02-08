import React, { useState, useContext } from 'react'
import { Input, AutoComplete, Button, Icon, Modal } from 'antd'
import { StateContext } from '../Context'
import { useAddInvoiceForm } from '../../../forms/useAddInvoiceForm'
import Document from '../Document/'
import addInvoice from '../../../GraphQL/mutation/addInvoice'

const Header = () => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const { state, dispatch } = useContext(StateContext)
  const { AddInvoice } = addInvoice()
  const stores = state.stores.map( store => store.name )

  const dateToday = new Date().toLocaleDateString(
    "en-US",
    { weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  )

  const handleOnSelect = (value) => {
    const selectedStore = state.stores.filter( store => {
      return store.name === value
    })

    dispatch({
      type: "updateSelectedStore",
      payload: selectedStore[0]
    })
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleSave = (values) => {
    setLoading(true)

    const products = state.cart.map( product => {
      return ({
        item: product.id,
        quantity: product.orderQuantity,
        price: product.price
      })
    })

    AddInvoice({ variables: {
      invoiceNumber: values.invoiceNumber,
      storeId: state.selectedStore.id,
      products,
    }}).then( result => {
      setTimeout(() => {
        dispatch({
          type: "updateCart",
          payload: []
        })
        setVisible(false)
        setLoading(false)
      }, 3000)
    })
  }

  const { handleSubmit, handleChange, values } = useAddInvoiceForm(handleSave, {
    invoiceNumber: ""
  })

  return (
    <div className="receipt-container">
      <div className="action">
        <Button
          onClick={() => setVisible(true)}
          loading={loading}
          disabled={!(state.cart.length > 0 && state.selectedStore)}
        >
          Print<Icon type="printer" />
        </Button>
        <Modal
          title="Add Invoice Number"
          visible={visible}
          onOk={handleSubmit}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
              Print<Icon type="printer" />
            </Button>,
          ]}
        >
          <Input
            name="invoiceNumber"
            placeholder="Invoice Number"
            size="large"
            onChange={handleChange}
            value={values.invoiceNumber}
            required
          />
          <Document/>
        </Modal>
      </div>
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
            onSelect={handleOnSelect}
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