// App.js
import "./App.css";
import { useEffect } from "react";
import React from "react";
import AppRoutes from "./Routes";

function App() {
    useEffect(() => {
    // When the app loads, check localStorage and apply dark mode
    const darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, []);

  return <AppRoutes />;
}

export default App;
