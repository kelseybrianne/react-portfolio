import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"



function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const changePage = () => {
    setCurrentPage(
    currentPage === 'About Me' ? currentPage = 'Contact' : currentPage = 'About Me')
  }

  return (
    <div className="App">
      <Header setCurrentPage={changePage} />
      <Navigation currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
