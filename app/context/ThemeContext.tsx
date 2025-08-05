"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

// Define the allowed theme values
type Theme = "light" | "dark";

// Define the possible actions for the theme reducer
type Action = { type: "TOGGLE_THEME" } | { type: "SET_THEME"; payload: Theme };

// Define the shape of the theme state
interface State {
  theme: Theme;
}

// Create the ThemeContext to hold theme state and dispatch function
const ThemeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// Reducer function to handle theme changes
const themeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_THEME": // Used to toggle themes
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { theme: newTheme };
    case "SET_THEME": // Used to set theme to either 'light' or 'dark'
      localStorage.setItem("theme", action.payload);
      document.documentElement.classList.toggle(
        "dark",
        action.payload === "dark"
      );
      return { theme: action.payload };
    default:
      return state;
  }
};

// Theme provider that wraps the app and provides theme context
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });

  useEffect(() => {
    /* Runs only at initial load. Either gets saved theme or sets theme to the
    one preferred by system */
    const saved = localStorage.getItem("theme") as Theme | null;
    const preferresDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = saved || (preferresDark ? "dark" : "light");

    dispatch({ type: "SET_THEME", payload: initial });
  }, []);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for accessing the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
