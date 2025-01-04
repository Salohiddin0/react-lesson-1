import About from './pages/About'
import Home from './pages/Home'
import Price from './pages/Price'
import RootLayout from './layout/RootLayout'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='price' element={<Price />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
