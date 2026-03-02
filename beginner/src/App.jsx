import { useState } from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Users from './Users'
import Contact from './Project/Contact'

import Profile from './Context/Profile'
import   Homi from './Context/Homi'
import './App.css'
import './index.css'
const App = () => {
  return(
    <div>
      <nav>
        
        <Link to='/Homi'>Homi</Link>
        <Link to='/Profile'>Profile</Link> 
        <Link to='/contact'>Contact</Link>

        
        </nav>
      <Routes>
        <Route path='/Homi' element={<Homi/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
    
  
    </div>
  )
}
export default App;