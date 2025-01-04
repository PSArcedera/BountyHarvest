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
        console.log(response)
        if(response.status !== 200) {
            alert("User account could not be created")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={"Name"} onChange={handleChange} name="userName" required maxLength={20}/>
            <input placeholder={"Email"} onChange={handleChange} name="userEmail" required maxLength={40}/>
            <input placeholder={"Number"} onChange={handleChange} name="userNumber" required maxLength={11}/>
            <input placeholder={"Address"} onChange={handleChange} name="userAddress" required maxLength={50}/>
            <input placeholder={"Password"} type="password" onChange={handleChange} name="userPassword" required maxLength={20}/>
            <button type="submit">Create Account</button>
        </form>
    )   
}

export default CreateUser
