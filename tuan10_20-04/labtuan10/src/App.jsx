import './App.css'
import AsyncThunkApp from './components/AsyncThunk'
import AuthApp from './components/AuthApp'
import CalculatorRedux from './components/CongTruRedux'
import CalculatorUseReducer from './components/CongTruUseReducer'
import CounterApp from './components/CounterApp'
import CartApp from './components/ShoppingApp'
import ThemeApp from './components/ThemeApp'
import TodoListApp from './components/TodoList'
import UsersApp from './components/UserApp'

function App() {


  return (
    <>
      {/* <CounterApp /> */}
      {/* <TodoListApp /> */}
      {/* <ThemeApp /> */}
      {/* <CartApp /> */}
      {/* <AuthApp /> */}
      {/* <UsersApp /> */}
      <AsyncThunkApp />
    </>
  )
}

export default App
