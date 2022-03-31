import React, { useState } from "react";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import CurrentPage from "./components/CurrentPage"
import Button from "./components/Button"

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    theme === 'Light' ? setTheme('Dark') : setTheme('Light');
  }

  // To ensure that the page stays on current page and doesn't go back to default 'About Me' when page is reloaded, set state to document.location...
  // const [currentPage, setCurrentPage] = useState(() => {
  //   return document.location.hash.slice(1);
  // });
  console.log(document.location);

  return (
    <div className={theme === 'Light' ? "App" : 'App dark-theme'}>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CurrentPage theme={theme} currentPage={currentPage}/>
      <Footer toggleTheme={toggleTheme} theme={theme} />
      {/* <Button toggleTheme={toggleTheme} theme={theme} /> */}
    </div>
  );
}

export default App;
