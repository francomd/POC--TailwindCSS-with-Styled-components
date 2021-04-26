import { useState, useEffect, useRef } from "react";

type Theme = "light" | "dark";

export default (): [Theme, () => void] => {
  const isMountRef = useRef(true);
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => {
      const newThemeState = prevTheme === "dark" ? "light" : "dark";
      localStorage.theme = newThemeState;
      return newThemeState;
    });

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
    } else {
      window.document.documentElement.classList.toggle("dark");
    }
  }, [theme]);

  // Detect device theme conf
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
    if (localStorage.theme) setTheme(localStorage.theme);
  }, []);

  return [theme, toggleTheme];
};
