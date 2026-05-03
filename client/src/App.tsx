import { Routes, Route, Link } from 'react-router-dom'

import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

import Home from "@pages/Home.tsx"
import NotFound from "@pages/NotFound.tsx"
import Profile from "@pages/Profile.tsx"

function App() {
  return (
    <div>
      <nav className="navigator">
        <Link to="/" className='item homeTitle'>Hasan Forum</Link>
        <Link to="/profile" className='item'><i className="bi bi-person-circle"></i></Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile/' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
