import React from 'react'
import { BrowserRouter, Route, Routes , Link } from 'react-router-dom'
import Home from './components/Pages/Home'
import TemplateOne from './components/TemplateOne';
import About from './components/Pages/About';
import Photo from './components/Pages/Photo';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <div>
    <BrowserRouter>
    <TemplateOne />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Photo' element={<Photo/>} />
        <Route path='/Contact' element={<Contact/>} />

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
