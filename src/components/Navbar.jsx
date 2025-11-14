import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Task Manager App</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/create" className="hover:text-gray-200">Create Task</Link>
      </div>
    </nav>
  );
}
