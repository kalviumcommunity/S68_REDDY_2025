import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landpage from '../pages/Landpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landpage/>
    </>
  )
}

export default App
