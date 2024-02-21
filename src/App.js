import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Products from "./components/pages/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/sign-up" Component={SignUp} />
          <Route path="/products" Component={Products} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
