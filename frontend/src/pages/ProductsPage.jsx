import { useState, useEffect } from 'react'
import { getProducts, findProduct, createProduct, updateProduct, deleteProduct } from '../api/productAPI'
import ProductTile from '../components/productTile'
import * as jwt_decode from "jwt-decode"

function ProductList() { 
  const [data, setData] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    async function loadProducts(){
      let data = await getProducts()
      data.sort((a, b) => a.productName.localeCompare(b.productName))
      if(data){
        setData(data)
      }
      const token = sessionStorage.getItem("User")
      const decodedUser = jwt_decode.jwtDecode(token)
      setUser(decodedUser)
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
                <ProductTile product={product} person={user}/>
              </>
            )
          }
        })}
      </div>
    </div>
  )
}

export default ProductList
