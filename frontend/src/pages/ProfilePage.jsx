import { useState, useEffect } from "react"
import * as jwt_decode from "jwt-decode"

function Profile(){

    const [user, setUser] = useState({})

    useEffect(() => {
        async function loadUserData(){
            const token = sessionStorage.getItem("User")
            const decodedUser = jwt_decode.jwtDecode(token)
            setUser(decodedUser)
        }
        loadUserData()
    }, [])

    return(
        <>
            <label>Name:</label>
            <h2 className="font-semibold">{user.user?.userName}</h2>
            <label>Email:</label>
            <h2>{user.user?.userEmail}</h2>
            <label>Address:</label>
            <h2>{user.user?.userAddress}</h2>
        </>
    )
}

export default Profile
