// context/AppContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();
import { API_URL } from "../config";

const url = API_URL;

const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [token, setToken] = useState(false);
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("userData");
    const savedToken = localStorage.getItem("token");

    // Set token to true if either userData or token exists
    if (savedUser || savedToken) {
      setToken(true);
    }

    // Set userData if it exists
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

  // Fetch data from API
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${url}`);
        setDoctors(response.data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const value = {
    doctors,
    loading,
    error,
    showLoginModal,
    setShowLoginModal,
    token,
    setToken,
    userData,
    setUserData,
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    message,
    setMessage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
