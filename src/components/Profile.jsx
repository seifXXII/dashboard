import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
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
      <div className="w-full max-w-lg bg-white p-8 rounded shadow-lg">
        {user ? (
          <div>
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <div className="mb-4">
              <strong>Name:</strong> {user.fullName}
            </div>
            <div className="mb-4">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-4">
              <strong>Phone:</strong> {user.phoneNumber}
            </div>

            {/* You can add more fields like preferences or other user data here */}

            <div className="flex justify-between mt-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Back to Dashboard
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
