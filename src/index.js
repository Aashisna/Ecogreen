import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import './Style.css';
import { BrowserRouter } from "react-router-dom";
import Footer from './Footer';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contacts from './Contacts';
import Blogs from './Blogs';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Header />
    <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
    <Footer/>
  </BrowserRouter>
</React.StrictMode>
);

reportWebVitals();
