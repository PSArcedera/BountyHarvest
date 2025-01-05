import CreateUser from "../components/CreateUser"
import LogIn from "../components/LogIn"
import { useState } from "react"

function SigninPage(){
    const [view, setView] = useState(0)


    return(
        <>
            {!view ?
            <div className="flex flex-col"> 
                <LogIn buttonView={<button className="font-bold text-yellow-500" onClick={() => setView(!view)}>Sign Up</button>}/>
                
            </div>: 
            <>
                <CreateUser buttonView={<button className="font-bold text-yellow-500" onClick={() => setView(!view)}>Login</button>}/>
            </>}            
        </>
    )
}

export default SigninPage
