import React from "react";
import Header from "./Pages/Header";
import Projects from "./Pages/Body.js";
import Nav from "./Components/Nav";


function App() {
  return (
    <div>
      <Header />
      <Nav />   
      <Projects />
    </div>
  );
}

export default App;
