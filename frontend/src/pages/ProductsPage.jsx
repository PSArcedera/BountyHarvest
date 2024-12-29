import { useState, useEffect } from 'react'
import { getProducts, findProduct, createProduct, updateProduct, deleteProduct } from '../api/productAPI'

function ProductList() { 

  const [data, setData] = useState()

  useEffect(() => {
    async function loadProducts(){
      let data = await getProducts()
      if(data){
        setData(data)
      }
    }
    loadProducts()
  }, [])

  return (
    <>
    {JSON.stringify(data)}
    </>
  )
}

export default ProductList
