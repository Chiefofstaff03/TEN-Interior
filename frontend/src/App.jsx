import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import ContactForm from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import LandingPage from "./pages/landing/Landing";
import BlogHome from "./pages/blog/BlogHome";
import BlogPage from "./pages/blog/BlogPage";
import BlogCategory from "./pages/blog/BlogCategory";
import Project1 from "./pages/projects/Project1";  
import Project2 from "./pages/projects/Project2";  
import Project3 from "./pages/projects/Project3";  
import Project4 from "./pages/projects/Project4";  
import Project5 from "./pages/projects/Project5";  
import Project6 from "./pages/projects/Project6";  


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/category/:blogTagId" element={<BlogCategory />} />
          <Route path="/project-details/1" element={<Project1 />} /> 
          <Route path="/project-details/2" element={<Project2 />} /> 
          <Route path="/project-details/3" element={<Project3 />} /> 
          <Route path="/project-details/4" element={<Project4 />} /> 
          <Route path="/project-details/5" element={<Project5 />} /> 
          <Route path="/project-details/6" element={<Project6 />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
