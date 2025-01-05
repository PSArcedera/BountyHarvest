// import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import ProductList from './pages/ProductsPage'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import Layout from './components/Layout'
import Profile from "./pages/ProfilePage"
import Orders from "./pages/OrderPage"
import { useEffect } from "react"
import axios from "axios"

function App() { 

  useEffect(() => {
    let token = sessionStorage.getItem("User")
    if(token){
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route element={<Layout/>}>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/myprofile" element={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
