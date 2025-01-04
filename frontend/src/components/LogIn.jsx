import { verifyUser } from "../api/userAPI"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function LogIn(){
 
    const [user, setUser] = useState({
        userEmail: "",  
        userPassword: ""
    })

    const navigate = useNavigate()

    function handleChange(e){
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e){
        e.preventDefault()
        let response = await verifyUser(user)
        if(response){
            navigate("/homepage")
            sessionStorage.setItem("User", response)
        }
        else{
            alert("Login failed")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={"Email"} onChange={handleChange} name="userEmail" required maxLength={40}/>
            <input placeholder={"Password"} type="password" onChange={handleChange} name="userPassword" required maxLength={20}/>
            <button type="submit">Login</button>
        </form>
    )   
}

export default LogIn
