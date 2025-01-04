import { createUser } from "../api/userAPI"
import { useState } from "react"

function CreateUser(){
 
    const [user, setUser] = useState({
        userName: "",
        userPassword: "",
        userNumber: 912,
        userEmail: "",
        userAddress: "",
    })

    function handleChange(e){
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault()
        let response = await createUser(user)
        let message = JSON.stringify(response)
        alert(message)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={"Name"} onChange={handleChange} name="userName" required maxLength={20}/>
            <input placeholder={"Email"} onChange={handleChange} name="userEmail" required maxLength={40}/>
            <input placeholder={"Number"} onChange={handleChange} name="userNumber" required maxLength={11}/>
            <input placeholder={"Address"} onChange={handleChange} name="userAddress" required maxLength={50}/>
            <input placeholder={"Password"} onChange={handleChange} name="userPassword" required maxLength={20}/>
            <button type="submit">Create Account</button>
        </form>
    )   
}

export default CreateUser
