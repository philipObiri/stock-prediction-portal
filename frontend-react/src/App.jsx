import './assets/css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
