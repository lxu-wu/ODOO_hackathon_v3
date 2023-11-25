import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>   
        <div>
          <img className='logo' src="../public/olymp-logo.jpg" alt="" />
        </div>
        <div>
          <img src="../public/user972.png" alt="" className='usericon' />
      
          <input type="text" placeholder='Pseudo' id='pseudo' />
        </div>
        <div>
          <button id='join'>Rejoindre</button>

          
        </div>
        <div>
          <button>Creer un tournoi</button>
        </div>
     
     
    </>
  )
}

export default App
