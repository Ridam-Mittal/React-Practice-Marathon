import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <div className="flex flex-col min-h-screen p-12 bg-green-200">
      <h1>Learn about Redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
