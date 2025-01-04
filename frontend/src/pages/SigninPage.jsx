import CreateUser from "../components/CreateUser"
import LogIn from "../components/LogIn"
import { useState } from "react"

function SigninPage(){
    const [view, setView] = useState(0)


    return(
        <>
            {!view ?
            <> 
                <LogIn/>
                <button onClick={() => setView(!view)}>Create new account</button>
            </>: 
            <>
                <CreateUser/>
                <button onClick={() => setView(!view)}>Login</button>
            </>}            
        </>
    )
}

export default SigninPage
