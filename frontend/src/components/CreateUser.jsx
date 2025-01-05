import { createUser } from "../api/userAPI"
import { useState } from "react"
import banner from "../assets/signin_banner.png"
import logo from "../assets/logo.png"

function CreateUser({buttonView}){
 
    const [user, setUser] = useState({
        userName: "",
        userPassword: "",
        userNumber: 0,
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
        <div className="flex flex-row">
            <div className="w-full justify-items-center content-center">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <img src={logo} alt="logo" className="w-48 h-16 self-center"/>
                    <div className="flex flex-row text-center self-center m-4">
                        <h1 className="font-black text-5xl text-green-950">Sign</h1>
                        <h1 className="font-black text-5xl text-yellow-500">Up</h1>
                    </div>
                    <h2 className="font-regular text-lg text-green-950 ">Name</h2>
                    <input className="w-96 h-8 bg-gray-200 rounded-full p-4 mb-5" placeholder={"Name"} onChange={handleChange} name="userName" required maxLength={20}/>
                    <hr></hr>
                    <h2 className="font-regular text-lg text-green-950 ">Email</h2>
                    <input className="w-96 h-8 bg-gray-200 rounded-full p-4 mb-5" placeholder={"Email"} onChange={handleChange} name="userEmail" required maxLength={40}/>
                    <hr></hr>
                    <h2 className="font-regular text-lg text-green-950 ">Number</h2>
                    <input className="w-96 h-8 bg-gray-200 rounded-full p-4 mb-5" placeholder={"Number"} onChange={handleChange} name="userNumber" required maxLength={11}/>
                    <hr></hr>
                    <h2 className="font-regular text-lg text-green-950 ">Address</h2>
                    <input className="w-96 h-8 bg-gray-200 rounded-full p-4 mb-5" placeholder={"Address"} onChange={handleChange} name="userAddress" required maxLength={50}/>
                    <hr></hr>
                    <h2 className="font-regular text-lg text-green-950 ">Password</h2>
                    <input className="w-96 h-8 bg-gray-200 rounded-full p-4 mb-5" placeholder={"Password"} type="password" onChange={handleChange} name="userPassword" required maxLength={20}/>
                    <button className="bg-green-950 w-72 h-16 text-white rounded-full font-bold text-lg mb-8 self-center" type="submit">Create Account</button>
                    <div className="flex flex-row self-center">
                        <h2 className="self-center  text-green-950 m-2">Already have an account?</h2>
                        {buttonView}
                    </div>                
                </form>
            </div>
            <img src={banner} alt="banner" className="h-screen"/>
        </div>
    )   
}

export default CreateUser
