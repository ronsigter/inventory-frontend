import React from 'react'
import getAllProducts from './getAllProducts'

export default function Products() {

  const {ProductsLoading, ProductsError, Products} = getAllProducts()

  return (
    <div>
      {
        ProductsLoading ? "LOADING" :
        Products.map( product =>
          <div>{product.title}</div>
        )
      }
    </div>
  )
}
