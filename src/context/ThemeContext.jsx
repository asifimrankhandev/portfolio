import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const storageKey = 'theme-preference';
  const [themePreference, setThemePreference] = useState(
    () => localStorage.getItem(storageKey) || 'system'
  );

  const applyTheme = (preference) => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const resolved = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    
    root.dataset.themePreference = preference;
    root.dataset.theme = resolved;
    root.style.colorScheme = resolved;
  };

  useEffect(() => {
    applyTheme(themePreference);
    localStorage.setItem(storageKey, themePreference);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    
    const onSystemThemeChange = () => {
      if (themePreference === 'system') {
        applyTheme('system');
      }
    };

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', onSystemThemeChange);
    } else if (typeof media.addListener === 'function') {
      media.addListener(onSystemThemeChange);
    }

    return () => {
      if (typeof media.removeEventListener === 'function') {
        media.removeEventListener('change', onSystemThemeChange);
      } else if (typeof media.removeListener === 'function') {
        media.removeListener(onSystemThemeChange);
      }
    };
  }, [themePreference]);

  return (
    <ThemeContext.Provider value={{ themePreference, setThemePreference }}>
      {children}
    </ThemeContext.Provider>
  );
};
