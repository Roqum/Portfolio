import React from 'react';
import { Routes, Route } from "react-router-dom";
// Rounting Pages
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Books from './pages/Books.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Components
import NavBar from './components/NavBar.jsx';

// import scss
import './scss/App.scss'

function App() {
    return (
        <div className='bg-gray800'>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />} />
                <Route path="books" element={<Books />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
      </div>
    );
}
export default App;

