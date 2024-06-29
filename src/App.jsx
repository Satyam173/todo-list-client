import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      
      
      <BrowserRouter>
      <Nav />
      <h1 className="heading">Todo List</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </main>
  );
}

export default App;
