import { createContext, useContext, useState } from 'react';
const root = document.getElementById('html');

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('THEME_SWIPES');
    if (savedTheme) {
      root.className = savedTheme?.toLowerCase();
      return savedTheme;
    } else if (!savedTheme) {
      localStorage.setItem('THEME_SWIPES', 'Light');
      return 'Light';
    }
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
      root.className = crr.toLowerCase();
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
