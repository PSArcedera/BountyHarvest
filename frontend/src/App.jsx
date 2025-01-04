// import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import ProductList from './pages/ProductsPage'
import HomePage from './pages/HomePage'
import SigninPage from './pages/SigninPage'
import NavBar from './components/NavBar'
import Layout from './components/Layout'

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SigninPage/>}/>
        <Route element={<Layout/>}>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/products" element={<ProductList/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
