import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MainPage } from './component/mainPage'
import {
  BrowserRouter, Routes, Route, Switch,
} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)


    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={mainPage} />
            <Route path='/Video' Component={Video} />
          </Routes>
        </BrowserRouter>
      )

}

export default App
