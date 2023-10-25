import { createContext, useReducer, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: null,
  page: null,
  setIsDarkMode: () => {},
  setPage: () => {},
  toggleDarkMode: () => {}
});

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  const [page, setPage] = useState(1);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setIsDarkMode(d => !d);
  };

  return (
    <ThemeContext.Provider value={{
      state,
      dispatch,
      isDarkMode,
      page,
      setIsDarkMode,
      setPage,
      toggleDarkMode
    }}>
        {props.children}
    </ThemeContext.Provider>
  );
};
