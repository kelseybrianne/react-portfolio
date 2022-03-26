import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import CurrentPage from "./components/CurrentPage"

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      <CurrentPage currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
