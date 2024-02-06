import './App.css'
import Background from './components/Background'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Faq from './components/faq'

// app.jsx
function App() {
  return (
    <div className="container">
        <Navbar />
        <Home />
        {/* <Faq /> */}
      <div className='bg-img'></div>
      <div className='bg-color'></div>
      {/* <Background /> */}
    </div>
    
  )
}

export default App;