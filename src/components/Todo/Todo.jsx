import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [task, setTask] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track index for editing

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (data.trim()) {
      if (editingIndex !== null) {
        // Update the task if editing
        const updatedTasks = [...task];
        updatedTasks[editingIndex] = data;
        setTask(updatedTasks);
        setEditingIndex(null);
      } else {
        // Add new task
        setTask([...task, data]);
      }
      setData("");
    }
  };

  const handleEdit = (index) => {
    setData(task[index]); // Load task into input field
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setTask(task.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          ✅ Todo List
        </h1>
        <form
          className="flex gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none text-lg"
            placeholder="Enter task..."
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button className="bg-purple-500 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold transition-all">
            Add
          </button>
        </form>

        <ul className="mt-6 space-y-3">
          {task.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <span className="text-lg text-gray-700">{item}</span>
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-md font-semibold transition-all"
                  onClick={() => handleEdit(index)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md font-semibold transition-all"
                  onClick={() => handleDelete(index)}
                >
                  ❌ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
