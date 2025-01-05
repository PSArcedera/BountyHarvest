import axios from "axios"

const URL = "http://localhost:3000"

export async function getOrders(){
    const response = await axios.get(`${URL}/orders`)
    if(response.status == 200){
        return response.data
    }
    else{
        return
    }
}

export async function createOrder(order){
    const response = await axios.post(`${URL}/orders/create`, order)
    return response
}