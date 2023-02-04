import { useContext } from "react";
import Contact from "./components/contact/contact";
import About from "./components/intro/about/about";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
      className="App"
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
