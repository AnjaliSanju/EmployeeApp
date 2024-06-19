// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Empform from './components/Empform'
import Main from './components/Main'


function App() {

  return (
    
    <>
      <Routes>
        <Route path='/' element={<Main child={<Home/>}/>} ></Route>       
        <Route path='/forms' element={<Main child={<Empform/>}/>} ></Route>

      </Routes>
    </>
  )
}

export default App
