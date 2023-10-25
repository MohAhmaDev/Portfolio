import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import './style.css';
import './fonts.css';
import { ThemeContext } from "./context";
import Temp from "./components/cv_fiche/Temp";
import Navbar from "./components/navbar/Navbar";
import Tools from "./components/tools/Tools";


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#24292d" : "white",
        color: darkMode && "white",
        transition: "background .5s"
      }}
    >
      <Toggle />
      <Navbar />
      <Intro id={"section1"}/>
      <Temp id={"section2"}/>
      <ProductList id={"section3"}/>
      <About id={"section4"}/>
      <Tools id={"section5"}/>
      <Contact id={"section6"}/>
      
    </div>
  );
};

export default App;
