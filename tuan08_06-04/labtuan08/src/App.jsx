import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-5 gap-4 p-4 h-screen">
        <Menu className="col-span-1" />
        <div className="col-span-4 ">
          <Dashboard />
        </div>
      </div>
    </>
  )
}

export default App
