import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSumbit}
        className="bg-gray-800 p-10 mb-4 rounded-lg"
      >
        <h1 className="text-2xl font-bold text-white mb-3">Create a new task</h1>
        <input
          placeholder="Name"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          autoFocus
          required
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          required
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
