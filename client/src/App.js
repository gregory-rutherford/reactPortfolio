import React from "react";
import Header from "./Pages/Header";
import Projects from "./Pages/Body.js";
import Nav from "./Components/Nav";
import Technology from "./Components/Technology";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Technology />
      <Projects />
    </div>
  );
}

export default App;
