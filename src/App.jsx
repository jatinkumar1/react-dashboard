import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Overview from './pages/Overview'
import Products from './pages/Products'
import User from './pages/Users'
import Sales from './pages/Sales'
import Analytics from './pages/Analytics'
import Setting from './pages/Setting'
import Sidebar from './components/common/Sidebar'
import Orders from './pages/Orders'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='flex h-full bg-gray-900'>

          <Sidebar />
          <div className='flex-1'>

            <Routes>
              <Route path='/' element={<Overview />} />
              <Route path='/products' element={<Products />} />
              <Route path='/users' element={<User />} />
              <Route path='/sales' element={<Sales />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/analytics' element={<Analytics />} />
              <Route path='/setting' element={<Setting />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
