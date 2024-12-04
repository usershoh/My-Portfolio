import React from "react";
import Header from "../components/header";
import { Route, Routes } from "react-router-dom";
import BlogPage from "../pages/blog";
import ProjectPage from "../pages/project";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import Footer from "../components/footer";

const Root = () => {
  return (
    <div className="bg-backround">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Root;
