import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react'
import Home from './Home';
import New1 from './New1';
import HOC from './HOC';
import Contact from './Contact';
import Features from './Features';

const Navigate = () => {
    
  return (
   <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
                                           
            <Route path='/features' element={
                                    <HOC>
                                        <Features/>
                                    </HOC>
            }/>
            <Route path='/new1'  element={
                                    <HOC>
                                        <New1/>
                                    </HOC>
            }/>
            <Route path='/contact'  element={
                                    <HOC>
                                        <Contact/>
                                    </HOC>
            }/>
        </Routes>
    </Router>
  )
}

export default Navigate