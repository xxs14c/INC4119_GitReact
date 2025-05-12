import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {!isLoggedIn ? (
          <LoginPage onLogin={handleLogin} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;