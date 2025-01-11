import AddTodo from "./component/addTodo"
import Todos from "./component/Todos"
function App() {
  return (
    <>
    <span className="text-center font-semibold text-2xl border-2 bg-gray-300 p-6 flex justify-center items-center rounded-lg m-10">Learn about redux toolkit</span>
      <AddTodo />
      <Todos />
    
    </>
  )
}

export default App