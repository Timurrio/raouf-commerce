import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Home'
import Footer from './components/Footer/Footer'
import "./App.scss"
import Categories from './pages/Categories/Categories'
import ProductPage from './pages/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'


const App: React.FC = () => {
  const [displayNone, setDisplayNone] = useState(true)
  setTimeout(() => setDisplayNone(false), 500)



  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Cart />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:category" element={<Categories />} />
            <Route path='/products/:id' element={<ProductPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}


export default App
