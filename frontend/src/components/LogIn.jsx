import { verifyUser } from "../api/userAPI"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import banner from "../assets/signin_banner.png"
import logo from "../assets/logo.png"

function LogIn({buttonView}){
 
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
            sessionStorage.setItem("User", response)
            axios.defaults.headers.common["Authorization"] = `Bearer ${response}`
            navigate("/products")
        }
        else{
            alert("Login failed")
        }
    }

    return(
        <div className="flex flex-row">
            <img src={banner} alt="banner" className="h-screen"/>
            <div className="w-full justify-items-center content-center">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <img src={logo} alt="logo" className="w-48 h-16 self-center"/>
                    <div className="flex flex-row text-center self-center m-4">
                        <h1 className="font-black text-5xl text-green-950">Sign</h1>
                        <h1 className="font-black text-5xl text-yellow-500">In</h1>
                    </div>
                    <h2 className="font-regular text-lg text-green-950 ">Email</h2>
                    <input className="w-96 h-12 bg-gray-200 rounded-full p-4 mb-5" placeholder={"Email"} onChange={handleChange} name="userEmail" required maxLength={40}/>
                    <hr className="mb-5"></hr>
                    <h2 className="font-regular text-lg text-green-950">Password</h2>
                    <input className="w-96 h-12 bg-gray-200 rounded-full p-4 mb-10" placeholder={"Password"} type="password" onChange={handleChange} name="userPassword" required maxLength={20}/>
                    <button className="bg-green-950 w-72 h-16 text-white rounded-full font-bold text-lg mb-8 self-center" type="submit">SIGN IN</button>
                    <div className="flex flex-row self-center">
                        <h2 className="self-center m-2 text-green-950">Don't have an account?</h2>
                        {buttonView}
                    </div>
                </form>
            </div>
        </div>
    )   
}

export default LogIn
