import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import TaskForm from "../components/TaskForm";

export default function CreateTask({ tasks, setTasks }) {
  const navigate = useNavigate();
  const { values, handleChange, resetForm } = useForm({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new task with unique ID
    setTasks([...tasks, { id: Date.now(), ...values }]);
    resetForm();
    navigate("/"); // go back to home
  };

  return <TaskForm values={values} handleChange={handleChange} handleSubmit={handleSubmit} />;
}
