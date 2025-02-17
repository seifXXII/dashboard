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
          <>
            <h1 className="text-4xl font-bold mb-4">Welcome {user.fullName}</h1>
            <p className="text-lg mb-4">This is your Dashboard.</p>
            <button
              onClick={() => navigate("/profile")}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              View Profile
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
