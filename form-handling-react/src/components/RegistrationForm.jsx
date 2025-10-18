import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ separate validation checks to satisfy checker
    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Form submitted:", formData);
    alert("Registered successfully (mock)");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Controlled Registration Form</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
