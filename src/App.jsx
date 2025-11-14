import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    // Add a default task to make table visible initially
    return JSON.parse(localStorage.getItem("tasks")) || [
      { id: 1, title: "Demo Task", description: "This is a demo task" },
    ];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </Router>
  );
}
