import React, { PropsWithChildren, useCallback } from 'react';

export type TTheme = 'dark' | 'light';

const getInitialTheme = (): TTheme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs as TTheme;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'dark';
};

export type TThemeContextProps = {
  theme: TTheme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<TThemeContextProps>(
  null as unknown as TThemeContextProps
);

const ThemeProvider = ({
  initialTheme,
  children,
}: PropsWithChildren<{ initialTheme?: TTheme }>) => {
  const [theme, setTheme] = React.useState<TTheme>(getInitialTheme);

  const toggleTheme = useCallback(
    () => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark')),
    []
  );

  const rawSetTheme = (theme: TTheme) => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
