import axios from "axios";

const URL = "http://localhost:3000"

export async function getProducts(){
    const response = await axios.get(`${URL}/products`)
    if(response.status == 200){
        return response.data
    }
    else{
        return
    }
}

export async function findProduct(id){
    const response = await axios.get(`${URL}/products/${id}`)
    if(response.status == 200){
        return response.data
    }
    else{
        return
    }
}

export async function createProduct(product){
    const response = await axios.post(`${URL}/products/create`, product)
    return response
}

export async function updateProduct(id, product){
    const response = await axios.put(`${URL}/products/${id}`, product)
    return response
}

export async function deleteProduct(id){
    const response = await axios.delete(`${URL}/products/${id}`)
    return response
}
