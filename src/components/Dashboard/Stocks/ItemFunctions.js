import React, { useState, useContext } from 'react'
import { Button, Input, Modal, Form } from 'antd'
import addProduct from '../../../GraphQL/mutation/addProduct'
import SearchProduct from './SearchProduct'

import { useAddProductForm } from '../../../forms/useAddProductForm'
import { StateContext } from '../Context'

const ItemFunctions = () => {
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { state, dispatch } = useContext(StateContext)

  const { AddProduct } = addProduct()

  const handleAddProduct = (values) => {
    setLoading(true)
    AddProduct({ variables: {
      title: values.title,
      description: values.description,
      price: parseFloat(values.price),
      quantity: 0
    }}).then( result => {
      const newProducts = state.products
      newProducts.push(result.data.createProduct)
      dispatch({
        type: "updateProducts",
        payload: {
          products: newProducts
        }
      })
      setTimeout(() => {
        setVisible(false)
        setLoading(false)
      }, 3000)
    })
  }

  const { handleSubmit, handleChange, values } = useAddProductForm(handleAddProduct, {
    title: "",
    description: "",
    price: 0
  })

  const handleCancel = () => {
    setVisible(false)
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }

  return (
    <div className="stock-functions">
      <SearchProduct/>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
      >
        Add Product
      </Button>
      <Modal
        title="Add Product"
        visible={visible}
        onOk={handleAddProduct}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
            Add
          </Button>,
        ]}
      >
        <Form {...formItemLayout}>
          <Form.Item label="Product name">
            <Input
              name="title"
              placeholder="Product name"
              size="large"
              onChange={handleChange}
              value={values.title}
              required
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input.TextArea
              name="description"
              placeholder="Product Description"
              size="large"
              autoSize={{minRows: 4, maxRows: 8}}
              onChange={handleChange}
              value={values.description}
              required
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input
              name="price"
              placeholder="Product price"
              size="large"
              type="number"
              onChange={handleChange}
              value={values.price}
              required
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ItemFunctions