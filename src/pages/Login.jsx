import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { API_URL } from "../config";

function Login() {
  const {
    setShowLoginModal,
    setToken,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    message,
    setMessage,
  } = useContext(AppContext);
  const [state, setState] = useState("Sign Up");

  const url = API_URL;

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setMessage(""); // clear any old message

    try {
      if (state === "Sign Up") {
        // POST signup API
        const response = await axios.post(
          `${url}/signup`,
          {
            username: name,
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );

        setMessage(response.data.msg || "Account created successfully!");

        // Store user data in localStorage
        if (response.data.data) {
          localStorage.setItem(
            "userData",
            JSON.stringify({
              name: response.data.data.username,
              email: response.data.data.email,
            })
          );
        }

        // Token is set as HttpOnly cookie by backend
        localStorage.setItem("token", "true");

        // Close modal and set token after successful signup
        setTimeout(() => {
          setToken(true);
          setShowLoginModal(false);
        }, 1500);
      } else {
        // POST login API
        const response = await axios.post(
          `${url}/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true, // Include cookies in request
          }
        );

        setMessage(response.data.msg || "Login successful!");

        // Store user data in localStorage
        localStorage.setItem(
          "userData",
          JSON.stringify({
            name: response.data.data.username,
            email: response.data.data.email,
          })
        );

        // Token is set as HttpOnly cookie by backend
        localStorage.setItem("token", "true");

        // Close modal and set token after successful login
        setTimeout(() => {
          setToken(true);
          setShowLoginModal(false);
        }, 1500);
      }

      // Clear form fields
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.error("Error:", error);
      setMessage(error.response?.data?.msg || "Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative shadow-[var(--box-shadow)] border border-[var(--grey5)] p-10 rounded-3xl overflow-hidden w-[350px] bg-white">
        <button
          onClick={() => setShowLoginModal(false)}
          className="absolute top-4 right-4 text-[var(--grey1)] hover:text-[var(--grey2)] text-2xl"
        >
          &times;
        </button>
        <form onSubmit={onSubmitHandler}>
          <div>
            <h4 className="text-[var(--grey1)] text-2xl font-semibold mb-1">
              {state === "Sign Up" ? "Create Account" : "Login"}
            </h4>
            <p className="text-[var(--grey1)] text-base mb-4">
              Please {state === "Sign Up" ? "create an account" : "login"} to
              book an appointment.
            </p>

            {state === "Sign Up" && (
              <>
                <p className="text-[var(--grey1)] text-base">Full Name</p>
                <input
                  className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
                  type="text"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </>
            )}

            <p className="text-[var(--grey1)] text-base mt-2">Email</p>
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <p className="text-[var(--grey1)] text-base mt-2">Password</p>
            <input
              className="border border-[var(--grey4)] w-full p-2 mt-1 rounded"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />

            <button
              type="submit"
              className="bg-[var(--blue1)] text-white text-center w-full p-3 mt-5 rounded cursor-pointer"
            >
              {state === "Sign Up" ? "Create Account" : "Login"}
            </button>

            {message && (
              <p className="mt-3 text-center text-sm text-[var(--grey1)]">
                {message}
              </p>
            )}

            {state === "Sign Up" ? (
              <p className="mt-2 text-sm text-[var(--grey1)] text-center">
                Already have an account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="text-[var(--blue1)] cursor-pointer underline"
                >
                  Login here
                </span>
              </p>
            ) : (
              <p className="mt-2 text-sm text-[var(--grey1)] text-center">
                Don't have an account?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="text-[var(--blue1)] cursor-pointer underline"
                >
                  Sign up here
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
