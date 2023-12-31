import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import "./App.scss"
import Categories from './pages/Categories/Categories'
import ProductPage from './pages/ProductPage/ProductPage'
import Cart from './components/Cart/Cart'
import ScrollToTopWrapper from './components/ScrollToTopWrapper'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { HashRouter } from 'react-router-dom'


const App: React.FC = () => {


  return (
    <div className="app">
      <HashRouter>
        <ScrollToTopWrapper>
          <Navbar />
          <Cart />
          <div className="container">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/categories/:category" element={<Categories />} />
              <Route path='/products/:id' element={<ProductPage />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </ScrollToTopWrapper>
      </HashRouter>
    </div>
  )
}


export default App
