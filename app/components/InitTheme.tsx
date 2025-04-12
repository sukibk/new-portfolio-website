"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

export function InitTheme() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = theme === "dark" || (!theme && prefersDark);

    const html = document.documentElement;
    html.classList.toggle("dark", isDark);
    html.classList.add("theme-ready");
    document.body.classList.add("theme-ready");
  }, []);

  return null;
}

const initialTheme = localStorage.getItem("theme") || "dark";
const ThemeContext = createContext(null);
const ThemeDispatchContext = createContext(null);

function themeReducer(theme: string): string {
  switch (theme) {
    case "dark":
  }
  return theme === "dark" ? "light" : "dark";
}

export function useThemeDispatch() {
  return useContext(ThemeDispatchContext);
}

export function useTheme() {
  return useContext(ThemeContext);
}

function ThemeProvider() {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);
}
