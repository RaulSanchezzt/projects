import { useEffect, useState } from "react";

function App() {
  const [todos, addTodo] = useState(["Learn React", "Learn TailwindCSS"]);

  function setTodo(todo) {
    addTodo([...todos, todo]);
  }

  function deleteTodo(todo) {
    let index = todos.indexOf(todo);
    todos.splice(index, 1);
    addTodo([...todos]);
  }

  useEffect(() => {});

  return (
    <div className="App container mx-auto p-10">
      <h1 className="text-2xl font-bold text-teal mb-3">To Do App</h1>
      <input
        type="text"
        id="input-todo"
        className="bg-slate-400 p-3 w-2/3 mb-2 rounded-md"
        placeholder="Write a task"
        required
      />
      <button
        onClick={() => {
          setTodo(document.getElementById("input-todo").value);
        }}
        className="bg-indigo-500 p-3 w-1/3 text-white rounded-md hover:bg-indigo-400"
      >
        Añadir Tarea
      </button>
      <ul>
        {todos.map((todo) => (
          <div className="todo bg-slate-300">
            <li className="bg-gray-700 text-white p-4 mt-4" key={todo}>{todo}</li>
            <p className="bg-red-500 w-20 px-2 py-1  hover:bg-red-500" onClick={() => deleteTodo(todo)}>Eliminar</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
