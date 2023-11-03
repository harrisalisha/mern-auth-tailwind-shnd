import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import About from './pages/About'

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route index path='/' element={<Home />} />
             <Route path='/signin' element={<Signin />} />
             <Route path='/signup' element={<Signup />} />
             <Route path='/about' element={<About />} />
             <Route path='/profile' element={<Profile />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
