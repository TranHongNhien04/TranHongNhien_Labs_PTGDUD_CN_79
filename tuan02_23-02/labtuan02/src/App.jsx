import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/HelloName'
import Todo from './components/TodoApp'
import CalculatorApp from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hello></Hello> */}
      {/* <Todo></Todo> */}
      <CalculatorApp></CalculatorApp>
    </>
  )
}

export default App
