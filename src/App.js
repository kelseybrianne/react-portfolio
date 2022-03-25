import React
// , { useState, useRef, useEffect } 
from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import 'bootstrap/dist/css/bootstrap.css';

const currentPage = 'About Me'

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation currentPage={currentPage}/>
      <Footer />
    </div>
  );
}

export default App;
