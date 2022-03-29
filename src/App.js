import React, { useState } from "react";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import CurrentPage from "./components/CurrentPage"

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  // To ensure that the page stays on current page and doesn't go back to default 'About Me' when page is reloaded, set state to document.location...
  // const [currentPage, setCurrentPage] = useState(() => {
  //   return document.location.hash.slice(1);
  // });

  return (
    <div className="App">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <CurrentPage currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
