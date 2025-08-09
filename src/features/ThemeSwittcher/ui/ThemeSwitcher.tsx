import { useState } from "react";

export const useThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleTheme };
};