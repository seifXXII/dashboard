import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      // If no user data is found, redirect to login page
      navigate("/login");
    } else {
      // If user data is found, set it in the state
      setUser(storedUser);
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        {user ? (
          <h1 className="text-4xl font-bold mb-4">
            Welcome {user.fullName} to your Dashboard!
          </h1>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
