
// ThemeToggleButton.js
import React from "react";
import { useTheme } from "@/app/context/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#4CAF50" : "#555",
        color: theme === "light" ? "white" : "black",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggleButton;
