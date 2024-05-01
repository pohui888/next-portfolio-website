"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

// Specify the theme only as these 2 themes
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

// Creating context provider
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  // munual toggle
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark"); // rember the user's theme peference
      document.documentElement.classList.add("dark"); // add "dark" to the clasLsit the the theme toggle to dark
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark"); // remove "dark" to the clasLsit the the theme toggle to dark
    }
  };

  // read from localStorage
  // use useEffect hook when need to synchronize with an external system
  // external system: local storage
  // useEffect will run at everytime component render. When the page refresh, useEffect will also render at first time.
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null; // initial as "null" if user didn't toggle to the theme

    if (localTheme) {
      setTheme(localTheme); // set the the by readinf from localStorage

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //check the window theme setting
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme, // toggleThem in the main function to deal with setTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
