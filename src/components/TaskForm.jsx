import React from "react";

export default function TaskForm({ values, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto p-4">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={values.title}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={values.description}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
