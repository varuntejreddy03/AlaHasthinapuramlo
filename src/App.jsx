import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import MobileBottomBar from './components/MobileBottomBar'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Delivery from './pages/Delivery'
import About from './pages/About'
import Reviews from './pages/Reviews'
import Footer from './components/Footer'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar onCartClick={() => setCartOpen(true)} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/menu"     element={<Menu onCartClick={() => setCartOpen(true)} />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about"    element={<About />} />
            <Route path="/reviews"  element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </BrowserRouter>
    </CartProvider>
  )
}
