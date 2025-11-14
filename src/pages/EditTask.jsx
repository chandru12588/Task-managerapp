import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";

export default function EditTask({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === parseInt(id));
  const { values, handleChange, setValues } = useForm({ title: "", description: "" });

  // Load task details when component mounts
  useEffect(() => {
    if (task) setValues({ title: task.title, description: task.description });
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the task in the list
    setTasks(tasks.map(t => (t.id === task.id ? { ...t, ...values } : t)));
    navigate("/"); // go back to home
  };

  if (!task) return <p className="p-4 text-red-600">Task not found!</p>;

  return <TaskForm values={values} handleChange={handleChange} handleSubmit={handleSubmit} />;
}
