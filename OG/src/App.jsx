import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import home from './component/home'
import jeu from './component/jeu'
import mainPage from './component/mainPage'

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';

function caca()
{
  return (
    <p>caca</p>
  )
}

function App() {
  const [count, setCount] = useState(0)


    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={mainPage} />
            <Route path='/caca' Component={caca} />
            <Route path='/home' Component={home} />
            <Route path='/jeu' Component={jeu} />
            
          </Routes>
        </BrowserRouter>
      </>
      )

}

export default App
