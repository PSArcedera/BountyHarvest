import { Link } from "react-router-dom"
import { pageData } from "./pageData"
import logo from "../assets/logo.png"
function NavBar(){
    return (
        <div className="content-center ">
            <img src={logo} alt="logo" className="w-[150px] h-[45px]"/>
            <div className="fixed top-0 w-1/4 right-8 flex justify-between">
                {pageData.map((page) => {
                    return(
                        <>
                            <Link to={page.path} className="p-2 m-4 border-0 border-2 rounded font-semibold">
                                <button>
                                    {page.name}
                                </button>
                            </Link>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default NavBar