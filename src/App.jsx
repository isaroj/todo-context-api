import ToDoReducer from './state/reducers/ToDoReducer'
import ToDoContext from './state/contexts/ToDoContext'
import { useReducer } from 'react'
import ToDo from './components/ToDo'
import ToDoDashboard from './components/ToDoDashboard'
import './App.css'

function App() {
  const [todos, dispatch] = useReducer(ToDoReducer, []);

  return (
    <ToDoContext.Provider
    value={{
      todos,
      dispatch
      }}
    >
      <ToDo />
      <ToDoDashboard/>
    </ToDoContext.Provider>
  )
}

export default App
