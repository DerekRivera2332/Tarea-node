import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Principal from './Principal.jsx'
import Info from './Info.jsx'
import Ejemplo from './Ejemplo.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Principal />
    </div>
  )
}

export default App
