import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
const RouteCom = () => {
  return (
    <div>
      <Router>
        <NavBar />
      
        
        <Routes>
          <Route exact path='/' element={<Home />} />
           <Route path='/services' element={<Home/>}/>
          <Route path='/partners' element={<Home/>}/>
          <Route path='/articles' element={<Home/>}/> 
        
        </Routes>
        <Footer/>

      </Router>
    </div>
  )
}

export default RouteCom
