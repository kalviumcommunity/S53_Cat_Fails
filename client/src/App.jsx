import './App.css'
import CardDetails from './components/CardDetails'
import Edit from './components/Edit'
import Home from './components/Home'
import Listings from './components/Listings'
import Navbar from './components/Navbar'
import NewPost from './components/NewPost'
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
          <Route path='/listings/new' element= {<NewPost />} />
          <Route path="/listings/details/:id" element={<CardDetails/>} />
          <Route path="/listings/edit/:id" element={<Edit/>} />
        </Routes>
      <div className='bg-img'></div>
      <div className='bg-color'></div>
    </div>
    
  )
}

export default App;