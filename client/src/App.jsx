import './App.css'
import Background from './components/Background'
import Home from './components/Home'
import Listings from './components/Listings'
import Navbar from './components/Navbar'
import Faq from './components/faq'
import { Route, Routes } from 'react-router-dom'

// app.jsx
function App() {
  return (
    <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/listings' element={<Listings/>}/>
          <Route path='/faq' element={<Faq/>}/>
        </Routes>
      <div className='bg-img'></div>
      <div className='bg-color'></div>
    </div>
    
  )
}

export default App;