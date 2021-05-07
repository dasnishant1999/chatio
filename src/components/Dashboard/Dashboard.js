import React from "react";
import { useAuth } from "../../contexts/AuthProvider";

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <>
      <h2>{currentUser.email}</h2>
      <button onClick={logout}>logout</button>
    </>
  );
}

export default Dashboard;
