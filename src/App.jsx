import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Log from './pages/log methods/Log'
import Product from './pages/productPage/Product'
import Footer from './components/footer/Footer'
import Cart from './pages/cart/Cart'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/log" element={<Log />} />
      <Route path="/products/:productID" element={
        <>
          <Product />
          <Footer />
        </>
      }/>
      <Route path="/cart" element={
      <>
        <Cart />
        <Footer />
      </>
      } />
    </Routes>
  )
}

export default App
