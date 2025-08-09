import { createContext, ReactNode } from "react";
import { useThemeSwitcher } from "../../../features/ThemeSwittcher/ui/ThemeSwitcher";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

interface ThemeProvaiderProps {
  children: ReactNode;
}

export const ThemeProvaider = ({ children }: ThemeProvaiderProps) => {
  const { isDark, toggleTheme } = useThemeSwitcher();

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};