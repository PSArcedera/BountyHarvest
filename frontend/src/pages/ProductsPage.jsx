import { useState, useEffect } from 'react'
import { getProducts, findProduct, createProduct, updateProduct, deleteProduct } from '../api/productAPI'
import ProductTile from '../components/productTile'


function ProductList() { 
  const [data, setData] = useState([])

  useEffect(() => {
    async function loadProducts(){
      let data = await getProducts()
      data.sort((a, b) => a.productName.localeCompare(b.productName))
      if(data){
        setData(data)
      }
    }
    loadProducts()
  }, [])

  return (
    <div className='m-10'>
      <h1 className='text-4xl font-black text-green-900'>PRODUCTS</h1>
      <div className='flex flex-row flex-wrap justify-stretch'>
        {data.map((product) => {
          if(product.productStock >= 0){
            return (
              <>
                <ProductTile product={product}/>
              </>
            )
          }
        })}
      </div>
    </div>
  )
}

export default ProductList
