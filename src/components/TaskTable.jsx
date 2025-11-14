import React from "react";
import { Link } from "react-router-dom";

export default function TaskTable({ tasks, setTasks }) {
  if (!tasks.length) return <p>No tasks found.</p>;

  const deleteTask = (id) => setTasks((prev) => prev.filter((task) => task.id !== id));

  return (
    <table className="w-full border-collapse border">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Title</th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className="border p-2">{task.title}</td>
            <td className="border p-2">{task.description}</td>
            <td className="border p-2 flex gap-2 justify-center">
              <Link to={`/edit/${task.id}`} className="text-blue-600">Edit</Link>
              <button onClick={() => deleteTask(task.id)} className="text-red-600">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
