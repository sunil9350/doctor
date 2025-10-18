// context/AppContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const url = "https://doctor-backend-ufgn.onrender.com/";

const AppContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [token, setToken] = useState(false);

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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
