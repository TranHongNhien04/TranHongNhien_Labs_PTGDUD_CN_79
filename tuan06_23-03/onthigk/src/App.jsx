import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CongAB from './components/UseState_example'
import DemLanRender from './components/UseRef_example'
import DanhSachNguoiDung from './components/UseEffect_example'
import ToDoList from './components/UseReducer_example'
import CounterWithCustomHook from './components/CustomHook_example'
import UseMemoExample from './components/UseMemo_example'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CongAB /> */}
      {/* <DemLanRender /> */}
      {/* <DanhSachNguoiDung /> */}
      {/* <ToDoList /> */}
      {/* <CounterWithCustomHook /> */}
      <UseMemoExample />
    </>
  )
}

export default App
