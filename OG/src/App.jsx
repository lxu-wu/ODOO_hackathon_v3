import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
      </div>
      <div>
        <div>
          <img className='logo' src="../public/olymp-logo.jpg" alt="" />
        </div>
        <div>
          <input type="text" placeholder='Pseudo' id='pseudo' />
        </div>
        <div>
          <button id='join'>Rejoindre</button>

          <button>Creer un tournoi</button>
        </div>
      </div>
     
    </>
  )
}

export default App
