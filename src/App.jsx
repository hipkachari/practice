import React from "react";
import { Contact, Footer, Hero, Navbar, Services } from "./components";
import "./App.css";
import Companies from "./components/Companies";
import AboutUs from "./components/AboutUs";
import Achievement from "./components/Achievement";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <AboutUs />
      <Achievement />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
