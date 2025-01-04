import About from './pages/About'
import Home from './pages/Home'
import Price from './pages/Price'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App () {
  return (
    <>
      <nav>
        <h1>Something About Me</h1>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/price' element={<Price />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
