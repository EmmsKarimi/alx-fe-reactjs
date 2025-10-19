// src/components/Profile.jsx
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile Page</h2>

      {/* Navigation for nested routes */}
      <nav style={{ marginBottom: "10px" }}>
        <Link to="details" style={{ marginRight: "10px" }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested content will render here */}
      <Outlet />
    </div>
  );
};

export default Profile;
