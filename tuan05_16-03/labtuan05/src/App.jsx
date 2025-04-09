import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Lab2bPage from './pages/Lab2b'
import CalcReducer from './components/Calc'
import MemoExample from './components/ReactMemo'
import UseMemoExample from './components/UseMemo'
import UseCallbackExample from './components/UseCallback'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Lab2bPage></Lab2bPage> */}
      {/* <CalcReducer /> */}
      {/* <MemoExample /> */}
      {/* <UseMemoExample /> */}
      <UseCallbackExample />



    </>
  )
}

export default App
