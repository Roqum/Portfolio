import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

// Rounting Pages
import Home from './pages/Home.jsx';
import Coding from './pages/Coding.jsx';
import Art from './pages/Art.jsx';
import Books from './pages/Books.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Components
import { TiInfoLarge } from 'react-icons/ti';
import { BiSolidContact } from 'react-icons/bi';
import { FaCode, FaBookOpen } from 'react-icons/fa';

// import scss
import './scss/App.scss'

const App = () => {
    const [isVisible, setIsVisible] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const toggleVisibility = () => {
        if (location.pathname != "/") {
            setIsVisible(true);
            navigate("/");
        }
        else {
        isVisible == false ? setIsVisible(true): setIsVisible(false);
        }
    }

    return (
        <div className='bg-gray800 bg-gradient'>
            <nav className="nav-custom w-100 py-0 fs-7 navbar navbar-expand-lg navbar-dark bg-dark text-white opacity-75">
                <div className='container w-65'>
                    <Link className="navbar-brand mb-0 h1" to="/" onClick={() => setIsVisible(false)}>David Burgstaller</Link> 
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <button  className="nav-link btn btn-default active" onClick={toggleVisibility}><FaCode size={20}/> PROJECTS</button>
                        </li>
                        <li className="nav-item active">
                        <Link className="nav-link btn btn-default active" to="/books"><FaBookOpen size={20}/> BOOKS</Link>
                        </li>
                        <li className="nav-item active">
                        <Link className="nav-link btn btn-default active" to="/about"><TiInfoLarge size={21}/>ABOUT ME</Link>
                        </li>
                        <li className="nav-item active">
                        <Link className="nav-link btn btn-default active" to="/contact"><BiSolidContact size={20}/> CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home visibility={isVisible}/>}/>
                <Route path="coding" element={<Coding/>} />
                <Route path="art" element={<Art/>} />

                <Route path="books" element={<Books />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
      </div>
    );
}
export default App;

