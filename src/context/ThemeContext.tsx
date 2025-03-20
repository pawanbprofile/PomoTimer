import {createContext, useContext, useEffect, useRef, useState} from 'react';
import Colors from '../utils/Colors';

export enum Theme {
  ORANGE,
  LIGHT,
}

type ThemeContextType = {
  primaryColor: string;
  textColor: string;
  actionColor: string;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<undefined | ThemeContextType>(
  undefined,
);

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState<Theme>(Theme.ORANGE);
  const primaryColor = useRef<string>(Colors.orangeTheme.primaryColor);
  const textColor = useRef<string>(Colors.orangeTheme.textColor);
  const actionColor = useRef<string>(Colors.orangeTheme.actionColor);
  useEffect(() => {
    if (theme === Theme.LIGHT) {
      primaryColor.current = Colors.lightTheme.primaryColor;
      textColor.current = Colors.lightTheme.textColor;
      actionColor.current = Colors.lightTheme.actionColor;
    } else {
      primaryColor.current = Colors.orangeTheme.primaryColor;
      textColor.current = Colors.orangeTheme.textColor;
      actionColor.current = Colors.orangeTheme.actionColor;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme =>
      prevTheme === Theme.ORANGE ? Theme.LIGHT : Theme.ORANGE,
    );
  };
  return (
    <ThemeContext.Provider
      value={{
        primaryColor: primaryColor.current,
        textColor: textColor.current,
        actionColor: actionColor.current,
        toggleTheme: toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Theme context must be used with in ThemeConetextProvider');
  }
  return context;
};
