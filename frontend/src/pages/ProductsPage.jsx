import { useState, useEffect } from 'react'
import { getProducts, findProduct, createProduct, updateProduct, deleteProduct } from '../api/productAPI'
import ProductTile from '../components/productTile'


function ProductList() { 
  const [data, setData] = useState([])

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
    <div className='text-left mt-10'>
      <h1 className='text-4xl font-black text-green-900'>PRODUCTS</h1>
      <div className='flex flex-wrap'>
        {data.map((product) => {
          return (
            <>
              <ProductTile product={product} />
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
