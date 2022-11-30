import React from 'react';
import './App.css';
import {
    Router,
    Route,
    Link, Routes, BrowserRouter
} from "react-router-dom";
import Home from "../home";
import Contact from "../Contact";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import roboto from '@fontsource/roboto'

function App() {

  return (
    <div>
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    </div>
  )
}

export default App;

