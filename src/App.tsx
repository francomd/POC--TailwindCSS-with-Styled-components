import Main from "./components/Main";
import Todo from "./components/Todo";
import ThemeContext from "./context/themeContext";
import useThemeHook from "./hooks/useThemeHook";

const App = () => {
  const [theme, toggleTheme] = useThemeHook();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Main>
        <Todo />
      </Main>
    </ThemeContext.Provider>
  );
};

export default App;
