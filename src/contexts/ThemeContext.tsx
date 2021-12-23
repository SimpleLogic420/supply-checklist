import React, { createContext, ReactNode, useState } from "react";
import { ThemeContextInterface } from "../types/contexts/theme";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ThemeContext = createContext<ThemeContextInterface>({ theme: 'theme-auto', setTheme: () => { } });

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "theme-auto");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };