import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";
import Header from "./Header";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    favoriteBook: "",
    favoriteGenre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    // Validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long and include a number, special character, and uppercase letter."
      );
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (formData.username.length < 4) {
      alert("Username must be at least 4 characters long");
      return;
    }

    // Submit data to backend
    try {
      const response = await fetch(
        "https://script-sanctuary-project-1.onrender.com/signup", // Ensure this endpoint is correct
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Response received:", response);

      // Check if the response is OK (status code 2xx)
      if (!response.ok) {
        let errorMessage = "Error submitting form.";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message;
        } catch (jsonError) {
          console.error("Failed to parse error response JSON:", jsonError);
          if (response.status === 404) {
            errorMessage =
              "The server could not be found. Please try again later.";
          } else {
            errorMessage = "An unknown error occurred.";
          }
        }
        throw new Error(errorMessage);
      }

      // Check if the response contains valid JSON
      let userData;
      try {
        userData = await response.json();
      } catch (jsonError) {
        console.error("Failed to parse success response JSON:", jsonError);
        throw new Error("Invalid JSON response from server.");
      }

      console.log("User data received:", userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/profile"); // Navigate to profile page on successful signup
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        error.message ||
          "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label htmlFor="favoriteBook">Favorite Book</label>
          <input
            id="favoriteBook"
            name="favoriteBook"
            type="text"
            value={formData.favoriteBook}
            onChange={handleChange}
            required
          />

          <label htmlFor="favoriteGenre">Favorite Genre</label>
          <input
            id="favoriteGenre"
            name="favoriteGenre"
            type="text"
            value={formData.favoriteGenre}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
