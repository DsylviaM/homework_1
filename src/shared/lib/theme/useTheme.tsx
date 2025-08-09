import { useContext } from "react";
import { ThemeContext } from "./ThemeProvaider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme error");
  }
  return context;
};