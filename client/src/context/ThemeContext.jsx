import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('THEME_SWIPES');
    return savedTheme ? savedTheme : 'Light';
  });

  const toggleTheme = option => {
    switch (option) {
      case 'Light':
        setTheme(option);
        break;
      case 'Dark':
        setTheme(option);
        break;
    }

    setTheme(crr => {
      localStorage.setItem('THEME_SWIPES', crr);
      return crr;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
