import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DanhSachBaiViet from './components/RenderAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DanhSachBaiViet />
    </>
  )
}

export default App
