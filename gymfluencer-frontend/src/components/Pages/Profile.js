import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
