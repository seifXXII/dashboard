import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard"; // Import the Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex justify-center items-center h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">
                  Welcome to My Dashboard
                </h1>
                <div className="space-x-4">
                  <Link to="/login">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Login
                    </button>
                  </Link>
                  <Link to="/signup">
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Add the Dashboard route */}
      </Routes>
    </Router>
  );
};

export default App;
