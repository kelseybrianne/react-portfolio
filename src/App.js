import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CurrentPage from "./components/CurrentPage";
import Button from "./components/Button";
import About from "./components/About";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };

  // To ensure that the page stays on current page and doesn't go back to default 'About Me' when page is reloaded, set state to document.location...
  // const [currentPage, setCurrentPage] = useState(() => {
  //   return document.location.hash.slice(1);
  // });

  console.log(document.location);

  return (
    // <Router>
      <div className={theme === "Light" ? "App" : "App dark-theme"}>
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {/* <Routes>
          <Route path="/about" element={<About />} /> */}
          <CurrentPage theme={theme} currentPage={currentPage} />
        {/* </Routes> */}
        <Footer toggleTheme={toggleTheme} theme={theme} />
        {/* <Button toggleTheme={toggleTheme} theme={theme} /> */}
      </div>
    // </Router>
  );
}

export default App;
