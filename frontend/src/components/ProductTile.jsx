import { useState } from "react"
import { createOrder } from "../api/orderAPI"

function ProductTile({product,person}){

    async function handleOrder(){
        console.log(person)
        const submitOrder = {
            orderPerson: person.user.userName,
            orderProduct: product.productName,
            orderPrice: product.productPrice
        }

        await createOrder(submitOrder)
    }

    return (
        <div className="m-10">
            <img src={product.productImage} alt="product image" className="w-64 h-64 object-cover"/>
            <div className="pt-2 pb-2 text-left">
                <h1 className="text-m font-semibold">{product.productName}</h1>
                <div className="flex justify-between">
                    <h2 className="text-sm font-medium">Php {product.productPrice}</h2>
                    <h2 className="text-sm font-light">Stocks: {product.productStock} kg</h2>
                </div>

            </div>
            <button onClick = {handleOrder} className="bg-green-950 w-64 h-12 text-white font-bold cursor-pointer hover:bg-green-800">ORDER</button>
        </div>
    )
}

export default ProductTile