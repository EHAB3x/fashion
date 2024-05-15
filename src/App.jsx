import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Log from './pages/log methods/Log'
import Product from './pages/productPage/Product'
import Footer from './components/footer/Footer'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/dashboard/Dashboard'
import ViewProducts from './pages/dashboard/viewProducts/ViewProducts'
import AddProducts from './pages/dashboard/addProduct/AddProducts'
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

      <Route path='/dashboard' element={<Dashboard />}/>

      <Route path='/dashboard/products' element={<ViewProducts />}/>

      <Route path='/dashboard/products/add' element={<AddProducts />}/>
    </Routes>
  )
}

export default App
