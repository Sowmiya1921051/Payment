import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cards from './components/cards'
import Payment from './components/payment'
import Cart from './components/cart'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/payment" element={<Payment />} />
          <Route path='/cart'  element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App